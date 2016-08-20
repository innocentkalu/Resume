require_relative 'person'
require 'json'
require 'pry'

class Resume < Sinatra::Base

  get '/display' do
    @person = Person.new
    @resumedata = {}
    @resumedata[:Name] = @person.name
    @resumedata[:Summary] = @person.summary
    @resumedata[:Projects] = @person.projects
    @resumedata[:Employment] = @person.employment
    @resumedata[:Volunteering] = @person.volunteering
    @resumedata[:Contact] = @person.contact
    @resumedata[:Education] = @person.education
    @resumedata[:Skills] = @person.skills
    @resumedata[:Photourl] = @person.photo
    @resume = @resumedata.to_json
    erb :display
  end

  get '/' do
    erb :index
  end
end





