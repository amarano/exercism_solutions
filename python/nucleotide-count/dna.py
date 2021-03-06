__author__ = 'angelo'
from string import maketrans

trans = maketrans("GCTA", "CGAU")

class DNA():

    def __init__(self, dna_string):
        self.dna_string = dna_string

    def to_rna(self):
        return self.dna_string.translate(trans)

    def count(self, target):
        if target not in 'ATCGU':
            raise ValueError("{0} is not a nucleotide.".format(target))
        return self.dna_string.count(target)

    def nucleotide_counts(self):
        c = {}
        for x in 'ATCG':
            c[x] = 0
        for char in self.dna_string:
            if c.has_key(char):
                c[char] += 1
        return c