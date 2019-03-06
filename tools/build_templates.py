import os


servercmds = []

os.chdir('../')
for filename in os.listdir("templates/smoothiedata"):
    dataPath = os.path.join(os.getcwd(), "templates/smoothiedata/{}".format(filename))

    outputPath = os.path.join(os.getcwd(), "templates/products/{}.html".format(filename[:-5]))

    templatePath = os.path.join(os.getcwd(), "templates/productTemplate.html")


    cmd = '''
    npx mustache {0} {1} > {2}
    '''.format(dataPath, templatePath, outputPath)


    servercmd = '''router.get('/product/{0}',function(req,res){{
      res.sendFile(path.join(__dirname+'/templates/products/{0}.html'));

    }});'''.format(filename[:-5])

    os.system(cmd)

    servercmds.append(servercmd)


print('===== ADD THESE LINES TO server.js =====')
for i in servercmds:
    print(i)
    print()
