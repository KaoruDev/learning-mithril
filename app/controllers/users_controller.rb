class UsersController < ApplicationController
  def index
    respond_to do |format|
      format.html { }
      format.json {
        render :json => User.where("username ~ ?", "^#{params[:query]}.*").order(:username => :asc)
      }
    end
  end
end
