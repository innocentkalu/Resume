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

  $("<h2>").attr("id","person_summary_heading").text("Summary").appendTo("#summary");
  $("<hr>").attr("id","hr").appendTo("#summary");
  $("<p>").attr("id","person_summary_text").text(resumedata.Summary).appendTo("#summary");

  $("<h2>").attr("id","person_projects_heading").text("Projects").appendTo("#projects");
  $("<hr>").attr("id","hr").appendTo("#projects");
  projects.forEach(function(project){
    $("<h3>").attr("id","person_project_title").text(project).appendTo("#projects");
    $("<p>").attr("id","person_project_text").text(resumedata.Projects.project).appendTo("#projects");
  });
});
