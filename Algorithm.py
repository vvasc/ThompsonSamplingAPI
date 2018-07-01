import sys, json, numpy as np
import random

#Read data from stdin
def read_in():
    lines = sys.stdin.readlines()
    #Since our input would only be having one line, parse our JSON data from that
    return json.loads(lines[0])

def main():
    lines = str(read_in())
    n_clicks = []
    clicks = []
    todos = lines.split('/')
    clicks = todos[0].split(',')
    n_clicks = todos[1].split(',')
    ads = []
    ad = 0
    max = 0
    for i in range(0, len(clicks)):
        rb = random.betavariate(int(clicks[i]) + 1, int(n_clicks[i]) + 1)
        if rb > max:
            max = rb
            ad = int(i)
    print(ad)


#start process
if __name__ == '__main__':
    main()