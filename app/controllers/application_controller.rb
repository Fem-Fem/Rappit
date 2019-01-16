class ApplicationController < ActionController::Base
	skip_before_action :verify_authenticity_token
	# skip_before_filter :verify_authenticity_token, if: :json_re

	# def json_request?
	# 	request.format.json?
	# end
end
