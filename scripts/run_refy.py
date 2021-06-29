from refy import settings
settings.DOWNLOAD_MODEL_ONLY = True
settings.DOWNLOAD_FAST = False

from refy.daily import Daily
from loguru import logger
from pathlib import Path
import sys

# setup logging
logger.remove()
logger.add(sys.stdout, level='DEBUG')
logger.add('log.log')


# first run refy
Daily(
    './library.bib',
    html_path='./_recomendations.html',
    N=20 ,
    show_html=False,
    n_days=7,  # from last week
)

# then create a dedicated HTML file
logger.info('Creating refy.html')

# read html
with open('_recomendations.html', 'r') as fin:
    _recomendations_html = fin.read()

# get style and content sections
_rec_style = _recomendations_html.split('<style>')[1].split('</style>')[0]
_rec_content = _recomendations_html.split('<code>')[1].split('</code>')[0]
Path('_recomendations.html').unlink()

# create complete HTML
TEMPLATE = """
<!DOCTYPE html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Federico Claudi</title>
    <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"> -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css"
        integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700" rel="stylesheet">
    <!-- Bulma Version 0.9.0-->
    <link rel="stylesheet" href="https://unpkg.com/bulma@0.9.0/css/bulma.min.css" />
    <!-- <link rel="stylesheet" type="text/css" href="../css/personal.css"> -->
    <script async type="text/javascript" src="../js/bulma.js"></script>
    <link rel="stylesheet" type="text/css" href="./style.css">
    <link rel="stylesheet" type="text/css" href="./animations.css">

    <meta charset="UTF-8">
    <script> 
        $(function () {
        var includes = $('[data-include]')
        $.each(includes, function () {
            var file = 'views/' + $(this).data('include') + '.html'
            $(this).load(file)
        })
        })
    </script> 
    <style>
    --REFY STYLE--
    </style>
</head>
<html>

<body style="background-color: white;">
    <!-- Navigation bar -->
    <nav class="navbar is-link is-fixed-top">
            <div class="navbar-brand">
                <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
    
            <div id="navbarExampleTransparentExample" class="navbar-menu">
                <div class="navbar-end">
                    <a class="navbar-item" href="index.html">
                        <span class="icon">
                            <i class="fas fa-home"></i>
                        </span>
                        <span>Home</span>
                    </a>
                    <a class="navbar-item" href="index.html#about">
                        <span class="icon">
                            <i class="fas fa-info"></i>
                        </span>
                        <span>Info</span>
                    </a>
                    <a class="navbar-item" href="index.html#publications">
                        <span class="icon">
                            <i class="fas fa-bars"></i>
                        </span>
                        <span>Publications</span>
                    </a>
                    <a class="navbar-item" href="cv.html">
                        <span class="icon">
                            <i class="fas fa-file-alt"></i>
                        </span>
                        <span>Resume</span>
                    </a>
                    <a class="navbar-item" href="index.html#os-projects">
                        <span class="icon">
                            <i class="fas fa-th-list"></i>
                        </span>
                        <span>Open Source</span>
                    </a>
                    <a class="navbar-item" href="index.html#contact">
                        <span class="icon">
                            <i class="fas fa-envelope"></i>
                        </span>
                        <span>Contact</span>
                    </a>
                </div>
            </div>
        </nav>

        <!-- content -->
        <div class="refy-content">
            <div class="box cv-message cv-hide">
                <p>For a description of how
                <a href="https://github.com/FedeClaudi/refy" target="_blank">refy</a> works, scroll to the bottom of this page.
                </p>
            </div>

            <div class="box cv-message cv-show">
                The <b>refy</b> recomendations cannot be visualized on mobile phones - sorry.</br>
                Please visualize this page from a desktop or tabled to view, or <a href="index.html#contact"> contact
                    me</a> for more details.

            </div>

            <code class="cv-hide">
            --REFY CONTENT --
            </div>
            </code>

            <div class="box refy-message cv-hide">
                <p>The papers recomendations displayed here are generated automatically using a package of mine:
                <a href="https://github.com/FedeClaudi/refy" target="_blank">refy</a>: a scientific papers recomendation
                tool that facilitates finding new, relevant papers for your research.
                One of refy's fetures is called <b>Daily</b>: it finds preprint that came out on BiorXiv in the last 24
                hours which could be relevant given ones interests, this is what you're seeing below here: the results 
                from refy's <b>Daily</b> recomendations.
                </p>
                <hr>
                <p>
                    To find relevant papers refy uses a `.bib` file with metadata about papers that I've read and found 
                    relevant in the past. Unlike other paper recomendation systems it doesn't use single papers or keywords
                    as reference and is thus poised to give more insightful recomendations. You can see which papers
                    are in my '.bib' file <a href="https://github.com/FedeClaudi/refy/blob/main/library.bib" target="_blank">here</a>
                </p>
                <hr>
                <p>
                    To update this page on a daily basis I'm using github actions to run a custom python script which 
                    inokes refy's <b>Daily</b> recomender and crates a HTML file displaying the results.
                </p>
            </div>
        </div>
</body>
"""

TEMPLATE = TEMPLATE.replace('--REFY STYLE--', _rec_style)
TEMPLATE = TEMPLATE.replace('--REFY CONTENT --', _rec_content)
TEMPLATE = TEMPLATE.replace('monospace"><', 'monospace"><div class="refy-code"><')
# save to file
with open('./refy.html', 'w') as fout:
    fout.write(TEMPLATE)
logger.info('Done')