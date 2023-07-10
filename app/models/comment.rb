class Comment < ApplicationRecord
  belongs_to :article
  # after_create_commit {broadcast_prepand_to "comment-section"}
  # after_update_commit {broadcast_replace_to "comment-section"}

end
