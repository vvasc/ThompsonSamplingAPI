import sys, json, numpy as np

#Read data from stdin
def read_in():
    lines = sys.stdin.readlines()
    #Since our input would only be having one line, parse our JSON data from that
    return json.loads(lines[0])

def main():
    #get our data as an array from read_in()
    lines = read_in()

    #create a numpy array
    np_lines = np.array(lines)

    #use numpys sum method to find sum of all elements in the array
    lines_sum = np.sum(np_lines)

    #return the sum to the output stream
    print lines_sum

#start process
if __name__ == '__main__':
    main()
#import numpy as numpy
#import random
#d = 10
#N = 1000
#ads = []
#total = []
#clicks = [0] * d
#n_clicks = [0] * d
#for n in range(0, N):
#  ad = random.randrange(d)
#print('teste 123456')

#def main():
 #   x = 1
  #  return x 

#if __name__ == "__main__":
 #   x = main()
  #  return x;