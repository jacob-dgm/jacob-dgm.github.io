import sys
inFile = sys.argv[1]
outFile = sys.argv[2]

output = []

def figureCode(pathname = "TODO"):
    output = ("<figure>\n" +
              "<a href=\"" + pathname + ".png\" target=\"_blank\" class=\"no-hover\">\n" +
              "<img class=\"contain\" src=\"" + pathname + ".png\" alt=\"TODO\">\n" +
              "</a>\n" +
              "<figcaption>TODO</figcaption>\n" +
              "</figure>")
    return output

def audioCode(pathname = "TODO"):
    output = ("<figure>\n" +
              "<audio controls src=\"" + pathname + ".mp3\">\n" +
              "Your browser does not support the <code>audio</code> element.\n" +
              "</audio>\n" +
              "<figcaption>TODO</figcaption>\n" +
              "</figure>")
    return output

def bothCode(pathname = "TODO"):
    output = ("<figure>\n" +
              "<a href=\"" + pathname + ".png\" target=\"_blank\" class=\"no-hover\">\n" +
              "<img class=\"contain\" src=\"" + pathname + ".png\" alt=\"TODO\">\n" +
              "</a>\n" +
              "</figure>\n" +
              "<figure>\n" +
              "<audio controls src=\"" + pathname + ".mp3\">\n" +
              "Your browser does not support the <code>audio</code> element.\n" +
              "</audio>\n" +
              "<figcaption>TODO</figcaption>\n" +
              "</figure>")
    return output

with open(inFile, 'r') as input_file:
    line = input_file.readline()
    while line:
        line = line.rstrip()
        if line and line[0] == "{":
            figure_args = line.strip("{}").split()
            if figure_args[0] == "fa":
                if len(figure_args) == 1:
                    output.append(bothCode())
                else:
                    output.append(bothCode(figure_args[1]))
            elif figure_args[0] == "f":
                if len(figure_args) == 1:
                    output.append(figureCode())
                else:
                    output.append(figureCode(figure_args[1]))
            elif figure_args[0] == "a":
                if len(figure_args) == 1:
                    output.append(audioCode())
                else:
                    output.append(audioCode(figure_args[1]))
        else:
            output.append(line)
        line = input_file.readline()

with open(outFile, 'w') as output_file:
    for x in output:
        output_file.write(str(x) + '\n')