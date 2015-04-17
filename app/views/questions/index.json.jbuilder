json.array!(@questions) do |question|
  json.extract! question, :id, :data
  json.url question_url(question, format: :json)
end
