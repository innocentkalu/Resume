$(document).ready(function() {

  var projects = (Object.keys(resumedata.Projects));
  var employment = (Object.keys(resumedata.Employment));
  var contact = (Object.keys(resumedata.Contact));
  var education = (Object.keys(resumedata.Education));
  var skills = (Object.keys(resumedata.Skills));

  var div_parent = $(document.createElement('div')).attr("id","parent").appendTo('body');
  var div_name = $(document.createElement('div')).attr("id","name").appendTo("#parent");
  var div_summary = $(document.createElement('div')).attr("id","summary").appendTo("#parent");
  var div_projects = $(document.createElement('div')).attr("id","projects").appendTo("#parent");
  var div_employment = $(document.createElement('div')).attr("id","employment").appendTo("#parent");
  var div_contact = $(document.createElement('div')).attr("id","contact").appendTo("#parent");
  var div_education = $(document.createElement('div')).attr("id","education").appendTo("#parent");
  var div_skills = $(document.createElement('div')).attr("id","skills").appendTo("#parent");
  var div_volunteering = $(document.createElement('div')).attr("id","volunteering").appendTo("#parent");

  $("<h1>").attr("id","person_name").text(resumedata.Name).appendTo("#name");

  $("<h2>").attr("id","section_heading").text("Summary").appendTo("#summary");
  $("<hr>").attr("id","hr").appendTo("#summary");
  $("<p>").attr("id","person_summary_text").text(resumedata.Summary).appendTo("#summary");

  $("<h2>").attr("id","section_heading").text("Projects").appendTo("#projects");
  $("<hr>").attr("id","hr").appendTo("#projects");
  projects.forEach(function(project){
    $("<h3>").attr("id","person_project_title").text(project).appendTo("#projects");
    $("<p>").attr("id","person_project_text").text(resumedata.Projects[project]).appendTo("#projects");
  });

  $("<h2>").attr("id","section_heading").text("Employment").appendTo("#employment");
  $("<hr>").attr("id","hr").appendTo("#employment");
  employment.forEach(function(emp){
    // $("<h3>").attr("id","person_employment_text").text(emp).appendTo("#employment");
    if ((emp =="Company") || (emp =="Location") || (emp =="Title") || (emp =="Duration")) {
      $("<h3>").attr("id","person_employment_text").text(resumedata.Employment[emp]).appendTo("#employment");
    } else if (emp =="Description") {
      $("<p>").attr("id","person_employment_text").text(resumedata.Employment[emp]).appendTo("#employment");
    }
    
  });

  $("<h2>").attr("id","section_heading").text("Volunteering").appendTo("#volunteering");
  $("<hr>").attr("id","hr").appendTo("#volunteering");
  $("<h3>").attr("id","person_volunteering_text").text(resumedata.Volunteering).appendTo("#volunteering");

  $("<h2>").attr("id","section_heading").text("Contact").appendTo("#contact");
  $("<hr>").attr("id","hr").appendTo("#contact");
  contact.forEach(function(con){
    // $("<h3>").attr("id","person_education_title").text(edu).appendTo("#education");
    $("<p>").attr("id","person_contact_text").text(resumedata.Contact[con]).appendTo("#contact");
  });

  $("<h2>").attr("id","section_heading").text("Education").appendTo("#education");
  $("<hr>").attr("id","hr").appendTo("#education");
  education.forEach(function(edu){
    $("<h3>").attr("id","person_education_title").text(edu).appendTo("#education");
    $("<p>").attr("id","person_education_text").text(resumedata.Education[edu]).appendTo("#education");
  });

  $("<h2>").attr("id","section_heading").text("Skills").appendTo("#skills");
  $("<hr>").attr("id","hr").appendTo("#skills");
  skills.forEach(function(skill){
    $("<h3>").attr("id","person_skill_title").text(skill).appendTo("#skills");
    $("<p>").attr("id","person_skill_text").text(resumedata.Skills[skill]).appendTo("#skills");
  });

});
