require_relative 'person'
require 'json'
require 'pry'

class Resume

  attr_reader :resumedata

  def initialize(person)
    @resumedata = {}

    @resumedata[:name] = person.name
    @resumedata[:summary] = person.summary
    @resumedata[:projects] = person.projects
    @resumedata[:employment] = person.employment
    @resumedata[:volunteering] = person.volunteering
    @resumedata[:contact] = person.contact
    @resumedata[:education] = person.education
    @resumedata[:skills] = person.skills
    @resumedata[:photourl] = person.photo
  end

end

new_resume = Resume.new(@person)

@new_resume_resumedata = new_resume.resumedata.to_json
puts @new_resume_resumedata

