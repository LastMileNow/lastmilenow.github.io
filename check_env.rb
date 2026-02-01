
require 'mkmf'
puts "Checking for gcc..."
puts "have_devel? #{have_devel?}"
puts "Config::CONFIG['CC']: #{RbConfig::CONFIG['CC']}"
puts "PATH: #{ENV['PATH']}"
