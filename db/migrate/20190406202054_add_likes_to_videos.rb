class AddLikesToVideos < ActiveRecord::Migration[5.2]
  def change
    add_column :videos, :likes, :integer
  end
end
