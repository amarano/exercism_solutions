from math import floor


class Clock:
    def __init__(self, hours, minutes):
        self.total_minutes = (hours * 60) + minutes

    def __str__(self):
        hours = floor((self.total_minutes / 60)) % 24
        minutes = self.total_minutes % 60
        return "{hours:02d}:{minutes:02d}".format(**{'hours': hours, 'minutes': minutes})

    def __eq__(self, other):
        return isinstance(other, Clock) and str(other) == str(self)

    def add(self, minutes):
        self.total_minutes += minutes
        return self