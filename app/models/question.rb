class Question < ActiveRecord::Base

	def make_question
		str = self.data + " "
		tmp = str.split(/\[.+?\]/)
		result = ""
		tmp.each do |a|
			if result == "" then	
				result = a
			else
				result << "[　　　]"
				result << a
			end					
		end
		result
	end
end

