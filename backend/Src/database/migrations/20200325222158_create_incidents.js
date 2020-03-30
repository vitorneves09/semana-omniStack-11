

exports.up = function(knex) {
    return knex.schema.createTable('incidents', (table)=>{
      table.increments();
      table.string('title').notNullable();
      table.string('description').notNullable();
      table.string('value').notNullable();
      table.string('ong_id').notNullable();
        
      /**
       * Registra foreign key(chave estrangeira)
       */
      table.foreign('ong_id').references('id').inTable('ongs');
    });
  };
  
  /**
   * rowback 
   */
  exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
  };
  