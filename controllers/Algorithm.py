import numpy as numpy
import random
d = 10
N = 1000
ads = []
total = []
clicks = [0] * d
n_clicks = [0] * d
for n in range(0, N):
  ad = random.randrange(d)