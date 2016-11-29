require 'colorize'

def colorizedsh(cmd)
  puts cmd.yellow
  sh cmd
end

namespace :website do

  desc "Compile the site"
  task :render do

    puts ("== Compiling website").green
    # build book
    sh 'Rscript -e "rmarkdown::render_site()"'

  end

  desc "view the site browser"
  task :view do
    puts ("== View site").green
    # build book
    sh 'gnome-open index.html'
  end

  desc "Clean the site build"
  task :clean do
    puts ("== Cleaning site").green
    # build book
    sh 'R -e "rmarkdown::clean_site()"'
  end


end
