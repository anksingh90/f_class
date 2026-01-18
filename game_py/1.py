# Program 19: Poker Dice Game : Single Round

import random

print('╔═══════════════════════════════════╗')
print('║\tPOKER DICE GAME - ROUND 1   ║')
print('╚═══════════════════════════════════╝')

print('\nRolling 5 dice...\n')

# rolling the dice and storing value in dice
dice = [1, 2, 3, 4, 6]

'''
for i in range(5):
    value = random.randint(1,6)
    dice.append(value)
'''

score = 0    # storing score after each while round

while True: # will run dice roll 3 times in total.
    round = 1   # checks the round of dice roll < 3

    print('Position :  0  1  2  3  4')
    print('Dice :     ',dice[0],'',  dice[1],'',  dice[2],'',  dice[3],'',  dice[4])
    print('')
    
    # checks if 4 values in dice is either of value !
    counts = {}     # dictionary to hold number of occerence of each value
    for d in dice:
        counts[d] = counts.get(d, 0) + 1    # for ex - 4 not in counts, so get(4, 0) returns 0
        # counts[4] = 0 + 1 = 1             adds 3 into count and counts is now {3: 1}

    # checking if all the values are equal to 1 , 4 , 6 !
    if set(dice) == {4} or set(dice) == {1} or set(dice) == {6}:
        print('Current Hand : Five of a Kind')
        score = score + 500
        print('Potential Score: ', score) 
    
    # checks for Four of kind (4 of one number + 1 of another)
    elif 4 in counts.values(): # check if 4 values are same.
        print('Four of a Kind (400 points)')
        score = score + 400
        print('Potential Score: ', score)
    
    # checks for Full House (3 of one number + 2 of another)
    elif 3 in counts.values() and 2 in counts.values():
        print('Full House (300 points)')
        score = score + 300
        print('Potential Score: ', score)

    # checks for Straight (five consecutive numbers)
    elif set(dice) == {1, 2, 3, 4, 5} or set(dice) == {2, 3, 4, 5, 6}:
        print('Straight (200 points)')
        score = score + 200
        print('Potential Score: ', score)
    
    # checks for Three of a Kind (exactly 3 of one number, other two different)
    elif 3 in counts.values() and 2 not in counts.values():
        print('Three of a Kind (150 points)')
        score = score + 150 
        print('Potential Score: ', score)
    
    # checks for 2 of a Kind (exactly 2 of one number, other 1 different)
    elif 2 in counts.values() and 2 not in counts.values():
        print('Two Pair (100 points)')
        score = score + 100 
        print('Potential Score: ', score)

    # checks for Two Pair (exactly 2 pairs of different numbers)
    elif list(counts.values()).count(2) == 2:
        print('Two Pair (100 points)')
        score = score + 100 
        print('Potential Score: ', score)

    # checks for 1 Pair (exactly 1 pairs of different numbers)
    elif list(counts.values()).count(2) == 1:
        print('One Pair (50 points)')
        score = score + 50
        print('Potential Score: ', score)

    # Nothing/High Card - all dice different, not a straight
    else:
        print('Nothing / High Card (0 points)')
        score = score + 0
        print('Potential Score: ', score)

    print('\nRe-rolls remaining: ',3-round)
    ch = input('Keep this hand or try to improve? (Y to keep, N to re-roll): ').lower()

    # will play again if users wants to else break
    if ch == 'n':
        print('\nWhich dice to roll ? (Enter positions like 0,2,4 or all or none): ')
        print('Dice : ')
        print('Position :  0  1  2  3  4')
        print('Dice :     ',dice[0],'',  dice[1],'',  dice[2],'',  dice[3],'',  dice[4])
        print('')

        break
    
    else:
        break

