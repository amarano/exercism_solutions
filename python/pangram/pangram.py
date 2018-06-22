from string import ascii_lowercase


def is_pangram(s):
    return len(set([c for c in s.lower() if c in ascii_lowercase])) == 26