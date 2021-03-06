$(document).ready(function() {

  var projects = (Object.keys(resumedata.Projects));
  var employment = (Object.keys(resumedata.Employment));
  var contact = (Object.keys(resumedata.Contact));
  var education = (Object.keys(resumedata.Education));
  var skills = (Object.keys(resumedata.Skills));
  // Creating containers
  var div_parent = $(document.createElement('div')).attr("id","parent").appendTo('body');
  var div_name = $(document.createElement('div')).attr("id","name").appendTo("#parent");
  var div_summary = $(document.createElement('div')).attr("id","summary").appendTo("#parent");
  var div_photo = $(document.createElement('div')).attr("id","photo").appendTo("#parent");
  var div_projects = $(document.createElement('div')).attr("id","projects").appendTo("#parent");
  var div_employment = $(document.createElement('div')).attr("id","employment").appendTo("#parent");
  var div_contact = $(document.createElement('div')).attr("id","contact").appendTo("#parent");
  var div_education = $(document.createElement('div')).attr("id","education").appendTo("#parent");
  var div_skills = $(document.createElement('div')).attr("id","skills").appendTo("#parent");
  var div_volunteering = $(document.createElement('div')).attr("id","volunteering").appendTo("#parent");
  // Inserting content

  $("<h1>").attr("id","person_name").text(resumedata.Name).appendTo("#name");
  // Inserting summary
  $("<h2>").attr("id","section_heading").text("Summary").appendTo("#summary");
  $("<hr>").attr("id","hr").appendTo("#summary");
  $("<p>").attr("id","person_summary_text").text(resumedata.Summary).appendTo("#summary");
  // Inserting projects
  $("<h2>").attr("id","section_heading").text("Projects").appendTo("#projects");
  $("<hr>").attr("id","hr").appendTo("#projects");
  projects.forEach(function(project){
    $("<h3>").attr("id","person_project_title").text(project).appendTo("#projects");
    $("<p>").attr("id","person_project_text").text(resumedata.Projects[project]).appendTo("#projects");
  });
  // Inserting employment
  $("<h2>").attr("id","section_heading").text("Employment").appendTo("#employment");
  $("<hr>").attr("id","hr").appendTo("#employment");
  employment.forEach(function(emp){
    if ((emp =="Company") || (emp =="Location") || (emp =="Title") || (emp =="Duration")) {
      $("<h4>").attr("id","person_employment_text").text(resumedata.Employment[emp]).appendTo("#employment");
    } else if (emp =="Description") {
      $("<p>").attr("id","person_employment_text").text(resumedata.Employment[emp]).appendTo("#employment");
    }
  });
  // Inserting volunteering
  $("<h2>").attr("id","section_heading").text("Volunteering").appendTo("#volunteering");
  $("<hr>").attr("id","hr").appendTo("#volunteering");
  $("<p>").attr("id","person_volunteering_text").text(resumedata.Volunteering).appendTo("#volunteering");
  // Inserting contact
  $("<h2>").attr("id","section_heading").text("Contact").appendTo("#contact");
  $("<hr>").attr("id","hr").appendTo("#contact");
  $("<a>").attr("id","person_contact_text").attr("class","person_contact_link").attr("href","mailto:"+resumedata.Contact.email).text(resumedata.Contact.email).appendTo("#contact");
  $("<p>").attr("id","person_contact_text").text(resumedata.Contact.phone).appendTo("#contact");
  $("<p>").attr("id","person_contact_text").text(resumedata.Contact.city).appendTo("#contact");
  $("<a>").attr("id","person_contact_text").attr("class","person_contact_link").attr("href","https://www.linkedin.com/"+resumedata.Contact.LinkedIn).text(resumedata.Contact.LinkedIn).appendTo("#contact");
  $("<br>").appendTo("#contact");
  $("<br>").appendTo("#contact");
  $("<a>").attr("id","person_contact_text").attr("class","person_contact_link").attr("href","https://github.com/"+resumedata.Contact.github).text(resumedata.Contact.github).appendTo("#contact");

  // Inserting education
  $("<h2>").attr("id","section_heading").text("Education").appendTo("#education");
  $("<hr>").attr("id","hr").appendTo("#education");
  education.forEach(function(edu){
    $("<h3>").attr("id","person_education_title").text(edu).appendTo("#education");
    $("<p>").attr("id","person_education_text").text(resumedata.Education[edu]).appendTo("#education");
  });
  // Inserting skills
  $("<h2>").attr("id","section_heading").text("Skills").appendTo("#skills");
  $("<hr>").attr("id","hr").appendTo("#skills");
  skills.forEach(function(skill){
    $("<h3>").attr("id","person_skill_title").text(skill).appendTo("#skills");
    $("<p>").attr("id","person_skill_text").text(resumedata.Skills[skill]).appendTo("#skills");
  });
  // Inserting photo
  $("<img>").attr("id","person_photo").attr("src","https://s6.postimg.org/nvdeb2z8x/Innocent_Kalu.jpg").appendTo("#photo");
});
