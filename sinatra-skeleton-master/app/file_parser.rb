require 'msworddoc-extractor'

# doc = MSWordDoc::Extractor.load('../ikalu_resume.doc')
# puts doc.contents   # doc is MSWordDoc::Essence
# # You have to close document explicitly
# doc.close()

# Or call load() with block argument (recommended way)
# MSWordDoc::Extractor.load('../ikalu_resume.doc') do |doc|
#   puts doc.header
# end