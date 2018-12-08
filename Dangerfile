project = github.api.
maintainer = "thecodechef"

unless github.pr_author == maintainer

  if github.pr_title.include? %r{^(\[WIP\]|\[Work in Progress\]): (.+)$}
  	warn <<-MSG
    ### This PR is a [Work in Progess]

    > Please keep in mind this is PR a [WIP] and is subject to change in the future.
    If you do not mind this then download away.
    MSG
  end

  if git.modified_files.include? [%r{^(\.(github|circleci)|(Gem|Guard|Danger)file)/(.+)$}]
    github_files = git.modified_files.select { |path| path.include? ".github/*" }
    circleci_files = git.modified_files.select { |path| path.include? ".circleci/*" }
    ruby_files = git.modified_files.select { |path| path.include? %r{^(Gem|Guard|Danger|Rake)file$} }
    danger_files = [github_files,circleci_files,ruby_files,"TODO.md",%r{table_(.+).py}]
    warn <<-WARNING
      > This PR changes these files:

        #{ github.html_link(danger_files){ |f| "- #{f}" }}

      Please **DO NOT CHANGE** these files unless you have a good reason to.
      If you do then comment your reason below
      Thank You very Much
    WARNING
  end
end
