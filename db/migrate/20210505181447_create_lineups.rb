class CreateLineups < ActiveRecord::Migration[5.2]
  def change
    create_table :lineups do |t|
      t.string :name, null: false
      t.belongs_to :boat
      t.timestamps
    end
  end
end
