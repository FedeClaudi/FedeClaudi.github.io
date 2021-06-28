
# Edit website
To edit and visualize the website live:
1. host the website locally with
```
cd website
python -m http.server 
```
2. automatically update the style with
```
sass --watch website/style.sass website/style.css
```
3. open in a web browser: `http://0.0.0.0:8000/`

## update CV
To update the CV, go to [https://github.com/FedeClaudi/My_CV](repo) and generate a new cv.html with
```python
CV().to_html("cv.html")
```

## update refy
```
    python scripts/run_refy.py
```

