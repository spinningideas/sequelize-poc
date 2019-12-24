'use strict';

function PostgreRepository(sequelize, modelType) {
	this.sequelize = sequelize;
	this.modelType = modelType;
	this.model = sequelize[modelType];

	this.getModel = () => {
		if (!this.model) {
			this.model = this.sequelize[modelType];
		}
		return this.model;
	};

	/**
	 * truncates table mapped to this.getModel()
	 */
	this.clear = cb => {
		this.getModel()
			.truncate()
			.then(
				() => {
					if (cb) {
						cb(null, true);
					}
				},
				err => cb && cb(err)
			);
	};

	/**
	 * close db connection
	 * @returns {void}
	 */
	this.disconnect = () => {
		sequelize.close();
	};

	/**
	 * get all records in given table mapped to model for this repository
	 */
	this.findAll = async () => {
		return this.getModel()
			.findAll({
				raw: true
			})
			.then(
				data => {
					return data;
				},
				err => {
					return err;
				}
			);
	};

	/**
	 get all records having given criteria
	*/
	this.findWhere = async criteria => {
		return this.getModel()
			.findAll(
				{
					where: criteria
				},
				{
					raw: true
				}
			)
			.then(
				data => {
					return data;
				},
				err => {
					return err;
				}
			);
	};

	/**
	 get all records having given criteria in a paged and sorted fashion
	 using given pageNumber (1 based) and pageSize and order by data points
	*/
	this.findWherePagedSorted = async (criteria, pageNumber, pageSize, orderBy, orderDesc) => {
		if (pageNumber <= 0) {
			pageNumber = 1;
		}

		const offset = (pageNumber - 1) * pageSize;
		const limit = pageSize;
		let orderDirection = 'ASC';
		if (orderDesc.toLowerCase().toString() === 'true') {
			orderDirection = 'DESC';
		}
		const order = [[orderBy, orderDirection]];

		const resultCount = await this.getModel()
			.count({ where: criteria })
			.then(
				data => {
					return data;
				},
				err => {
					return err;
				}
			);

		const resultData = await this.getModel()
			.findAll(
				{
					limit,
					offset,
					where: criteria,
					order
				},
				{
					raw: true
				}
			)
			.then(
				data => {
					return data;
				},
				err => {
					return err;
				}
			);

		return { total: resultCount, data: resultData };
	};

	/**
	 * get one record using given  /:criteria
	 */
	this.findOneWhere = async criteria => {
		return this.getModel()
			.findOne(
				{
					where: criteria
				},
				{
					raw: true
				}
			)
			.then(
				data => {
					return data;
				},
				err => {
					return err;
				}
			);
	};

	/**
	 * create a new record using given entity data
	 */
	this.add = async entity => {
		return this.getModel()
			.create(entity)
			.then(
				data => {
					return data.toJSON();
				},
				err => {
					return err;
				}
			);
	};

	/**
	 * update records using given critera and entity data
	 */
	this.updateWhere = async (criteria, entity) => {
		this.getModel()
			.update(entity, {
				where: criteria,
				raw: true,
				returning: true
			})
			.then(
				data => {
					return data[1][0];
				},
				err => {
					return err;
				}
			);
	};

	/**
	 * delete records using given criteria
	 */
	this.deleteWhere = async criteria => {
		this.getModel()
			.destroy({
				where: criteria,
				raw: true
			})
			.then(
				() => {
					return data;
				},
				err => {
					return err;
				}
			);
	};
}

module.exports = PostgreRepository;
