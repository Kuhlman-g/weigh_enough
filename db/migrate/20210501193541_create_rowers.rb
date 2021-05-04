class CreateRowers < ActiveRecord::Migration[5.2]
  def change
    create_table :rowers do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.integer :height, null: false
      t.integer :weight, null: false
      t.string :side
      t.float :twok_pr
      t.float :sixk_pr
      t.string :status
      t.text :notes

      t.timestamps
    end
  end
end
