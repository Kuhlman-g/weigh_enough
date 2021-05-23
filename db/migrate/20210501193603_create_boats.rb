class CreateBoats < ActiveRecord::Migration[5.2]
  def change
    create_table :boats do |t|
      t.integer :seats, null: false
      t.string :name, null: false

      t.timestamps
    end
  end
end
