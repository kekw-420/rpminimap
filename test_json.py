import json

# Checks for JSONDecode Errors, finds shit like missing brackets
def syntax_check():
    data = None
    with open("templates/!data.json") as json_file:
        data = json.loads(json_file.read())
    print(data)

# Checks that all keys match all image names
def content_check():
    data = None
    with open("templates/!data.json") as json_file:
        data = json.loads(json_file.read())
    templates = data["Templates"]

    for key, value in templates.items():
        image = value["name"]
        image = image[:-4]
        if key != image:
            raise AssertionError

def test_syntax():
    syntax_check()

def test_content():
    content_check()
