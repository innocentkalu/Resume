class Person

  attr_reader :name

  def initialize
    @name = "INNOCENT KALU"
  end

  def summary
    value = "I am a experienced professional from the oil and gas industry eager to chart a new course in my career. I hold a bachelor's degree in Mathematics & Computer Science and a masters degree in Petroleum Engineering and I recently completed an immersive Web Development Course with Lighthouse Labs. I am an eager learner and I am really excited about creating software to solve life's big and small challenges. 

      I am looking forward to starting this new phase of my career and even though I bring a lot of transferable skills to the table I know that I have a lot to learn as a developer and I need to start as a Junior Developer. My expecations for both role and salary are therefore aligned with being a Junior Developer"
      return value
  end

  def projects
    value = {}
    value[:WellLogView]= "An app that displays Log Ascii Standard (LAS) formatted  oil well data on the web. The project is being implemented using Ruby, Sinatra, HTML, CSS and Javascript. I am working on both the front and back end."
    value[:BookShare]="An app designed for sharing books among users. Worked on the backend, some of the front end, app design and managing the project execution. The project was executed using Ruby and Sinatra."
    value[:"Rotten Mangoes"] = "A project in the style of the popular Rotten Tomatoes movie rating site. The user loads movies to the site and provides a rating of the movies on the site. The project was executed using Ruby on Rails."
    value[:"Contact List App"] = "The app allows the user to populate a contact list with names, email address and phone number. This was a Sinatra Single Page App."
    value[:"API Madness"] = "The app interacts with the Flickr using its API and downloads pictures of lighthouses that are then displayed one at a time. The project was executed using Javascript, HTML and CSS." 
    return value
  end

  def employment
    value = {}
    value[:Company]="Schlumberger"
    value[:Location] = "Calgary Canada, Doha Qatar, Port-Harcourt Nigeria"
    value[:Title] = "Petrophysicist"
    value[:Duration] = "Feb 1998 to Dec 2015"
    value[:Description] = "Worked as a petrophysicist and provided solutions to formation evaluation challenges faced by clients in Africa, Europe, the Middle East and North America. Recognized as a subject matter expert in reservoir petrophysics, mentored and trained junior members of the petrotechnical community, prepared project proposals, produced numerous technical reports and delivered numerous technical presentations within the company and to clients"
    return value
  end

  def volunteering
    value = "I volunteer regularly at the Calgary Interfaith Foodbank"
    return value
  end

  def contact
    value = {}
    value[:email] = "ikalu.ik@gmail.com"
    value[:phone] = "403-614-6810"
    value[:city] = "Calgary AB"
    value[:LinkedIn] = "/in/innocentkalu"
    value[:github] = "innocentkalu"
    return value
  end

  def education
    value = {}
    value[:"Heriot Watt University Edinburgh Scotland"] = "MSc Petroleum Engineering 2011"
    value[:"Federal University of Technology Owerri Nigeria"] = "BSc Mathematic & Computer Science 1996"
    return value
  end

  def skills
    value = {}
    value[:programming] = "Ruby, Javascript, JQuery,HTML,CSS,Fortran,Basic"
    value[:frameworks] = "Rails, Sinatra"
    value[:database] = "SQL, Postgress"
    return value
  end

  def photo
    "example.com"
  end

end

@person = Person.new

# p @person
# p @person.education
# p @person.skills
# p @person.contact
# p @person.summary
