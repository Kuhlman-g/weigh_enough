class RegistrationsController < Devise::RegistrationsController
  
  private

  def sign_up_params
    params.require(:user).permit(:email, :password, :password_confirmation, :zip_code)
  end

  def account_update_params
    params.require(:user).permit(:email, :password, :password_confirmation, :current_password, :zip_code)
  end
end