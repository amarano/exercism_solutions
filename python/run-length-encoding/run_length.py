import re


def encode(s):
    tokens = [[1, s[0]]]

    for i, x in enumerate(s[1:], 1):
        if s[i - 1] == x:
            tokens[len(tokens) - 1][0] += 1
        else:
            tokens.append([1, x])

    return ''.join(["{1}{0}".format(x[1], ("" if x[0] == 1 else str(x[0]))) for x in tokens])


def decode(s):
    groups = re.finditer('(\d*)(\D)', s, flags=re.UNICODE)
    return "".join([g.group(2) * int(g.group(1) if g.group(1) != '' else '1') for g in groups])