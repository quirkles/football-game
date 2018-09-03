# Football goal difference game

A game where users join leagues and try to predict which teams will win by the most goals per week.

The app is divided into a UI and a server, the UI is an isomorphic server side app, built with react and redux, and compiled with webpack.

## UI

The app is rendered server side and sent to the user fully rendered, it then loads a vendor and bundle js and the app comes alove.

## Game Rules

### Option 1

- For each round of https://www.premierleague.com/ matches (38 game weeks in total) the user picks one team from the twenty teams currently in the EPL.

- Once the user has chosen a team **twice**, this team will no longer be available for selection.
  #### Example

Game week 1 choice: Liverpool
Game week 2 choice: Liverpool
Game week 3 choice: ~~Liverpool~~ _are now unavailable_. User must choose a different team.

As there are 38 game weeks and 20 teams, there will be two teams that are _only chosen once_(18 teams x 2 + 2 teams x 1), or one team that is _never chosen_(19 teams x 2).

- Scoring. If the user's chosen team wins or loses, the user recieves the goal difference as points. If the chosen team draws, the user receives zero points.
  #### Examples:

Chosen team: Arsenal
Result: Cardiff City 2-3 Arsenal
**User points: +1**

Chosen team: Burnley
Result: Burnley 0-2 Man Utd
**User points: -2**

Chosen team: Everton
Result: Everton 1-1 Huddersfield
**User points: 0**

- If a user fails to make a selection before the game week deadline, an automatic deduction of **3 points** will be applied to their total score.

- The winner is the user with the highest points total at the end of the season.

### Option 2

- The same as above, but with no limitations on available teams (i.e Liverpool can be chosen every game week)
