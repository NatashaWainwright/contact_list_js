# Homepage (Root path)
get '/' do
  @contacts = Contact.all
  erb :index
end

post '/' do
  #binding.pry
  #decode the incoming json
  #pass those values into contact.create
  somevar = JSON.parse(request.body.read)
  Contact.create(name: somevar['name'], city: somevar['city'])
end