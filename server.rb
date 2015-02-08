require 'sinatra'

get '/' do 
	File.read(File.join('public', 'kittens.html'))
end