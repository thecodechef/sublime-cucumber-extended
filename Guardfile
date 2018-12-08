
guard 'cucumber' do
	watch(%r{^test/features/.+\.feature$})
	watch(%r{^test/support/.+\.ts$}) { 'test/features' }
	watch(%r{^test/steps/(.+)_steps\.ts$}) { |m| Dir[File.join("**/#{m[1].feature}")][0] || 'test/features' }
end