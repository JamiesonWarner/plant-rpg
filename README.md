# Plant RPG client

Plants jockey for growth in a top down procedurally generated world. Evolve the best plant species by editing the genome, then throw the resulting plant into a grow zone - a local sandbox of established plants in the area you're trying to invade. Grow zones tick every 10 seconds, and the evolution with new plants being added is done in real-time.

# Playthrough

## Species choice
To create a new game, a player chooses from a list of plant species and location:

```
> Dromidecus, Siberia
> Jimbo, Jamaica
> Jikaro, Uzbekistan
> Tiberius, Greece
> Badgers, WI
```

## Mutation
Then makes modifications to the genome:

```
> Growth strategies
>> Stockpile level

> Branching
>> Pinnate
>> Branching factor
>> Branching choice factor

> Leaves
>> Chlorophyll levels
>> Falls off at temperature
>> Turns yellow (deactivate) at temperature
>> Waxiness

> Vascular
>> Flow throughput

> Root system


> Cell motabolism

> Seeds
>> Type
>> Thickness

Generations to evolve: 4
```

"Generations to evolve" is the number of plant generations it would take to evolve that plant (the amount of genetic change you can make in a single generation is bounded.)

## Placement
Pick a grow-zone

```


                    `` `
                  ``````
        `  ` ``````````
    ` ......--.````````  `
    ``------...`...`.```
   ` `------..1XX``````
     .--------.`````````    `    `  ` `
 `   ..--------`---.```..`          ``` `
    `-..---------:::/:----.`....```.--.`
    .---..-.---:-:-----------....`.....``   `
`   ------.....-:::::--::-2XX.````.``..`.`                  ```
   `----.``` ````.`-----------..3XX`````..`              `...````
 ```..-.`         `.--:--------:-:...```.```           ``..`      `
   ` ```          `.:-::::-4XX....-...`````.     ```..----.```..`````
                ` ` `````.---.`````..``````.`  ````.--....--.-..----.
                  `       ----..````......``...`...:.-...---....--.`
                       `   -----........-5XX...``...::.```.....--..``
                         ` `...-.---:-----.......-...`..` `````  ``
                           ```.-:-.--..`````.-----``  `````  ```
                             ` `.-..`..-....---.`     `
                               ` `````-.-..`````.``   `
                                 `   ```.````.....`  `
                                   `   ``````.``..- ``
                                        `  .`..-`-``
                                      ````````...```
                                          ```````


<----------------------------------->
|                                   |
| Humidity, temperature, soil types |
|                                   |
<----------------------------------->

> 1
> 2
> 3
> 4
> 5

```

## Grow-zone

Side view of plants growing.

```


                              <++++++++++++
                                          |
                                          |
                                          |
                                          |
                                          |   +++++++++++>
                                          |  |/
              you!                        |  |
                                          | |/
                v                         |/
________________|_________________________|_________________________

```

```


                            <++++++++++++++
                                          |
                                          |
                                          |
                                          |
                                          |
                                          |
                                          |   +++++++++++>
              <++ +++>                    |   |
                | |                       |  |/
                | /                       |  |
                |/                        | |/
                |                         |/
________________|_________________________|_________________________

```

Success = reproduction

```


                            <++++++++++++++
                               |          |
                               <>         |
                               \/         |
                                          |
                                          |
                                          |
                                          |   +++++++++++>
              <++ +++>                    |   |
                | |                       |  |/
                | /                       |  |
                |/                        | |/
                |                         |/
________________|___________________________________________________

```

## Evolution

If you reproduce successfully, and your seed survives the winter, other players (or yourself) can choose to start a new game sprouting as you. Depending on your seed dispersal methods, the new sprout will start out in a nearby region, or a different location in the same region.


```


                            <++++++++++++++
                                          |
                                          |
                                          |
                                          |
                                          |
                                          |
                                          |   +++++++++++>
              <++ +++>                    |   |
                | |                       |  |/
                | /                       |  |
                |/                        | |/
                |                         |/
________________|_________________________|_________________________


                          <>
                          \/


```

Thus, after many generations of playing,

```

                                   _ a
                                  |
                                 _| b
                                | |
                               ,| | c
                               ||
                              _||___ d
                             | |
                             | |___________ e
                      _______|
                     |       |       , f
                     |       |     __|
                     |       |____|  |__ g
                _____|            |
               |     |            |____ h
               |     |
               |     |    ______ i
               |     | __|
         ______|     ||  |_________ j
        |      |      |
        |      |      |____________ k
        |      |
       _|      |          _________ l
      | |      |_________|
      | |                |________ m
      | |
      | |                                    ___ n
      | |___________________________________|
  ____|                                     |_ o
 |    |
 |    |                                ___ p
 |    |          _____________________|
 |    |   ______|                     |____ q
 |    |  |      |
 |    |__|      |_______________________ r
 |       |
 |       |__________________________ s
 |
 |                                                           _ t
 |                                 _________________________|
_|                           _____|                         |_ u
 |                          |     |
 |                        __|     |_______________ v
 |                       |  |
 |                       |  |        ___________________ w
 |         ______________|  |_______|
 |        |              |          |__________________________ x
 |        |              |
 |     ___|              |______________________________ y
 |    |   |
 |    |   |                _____________ z
 |    |   |          _____|
 |    |   |_________|     |_________________ aa
 |____|             |
      |             |_______________ ab
      |
      |                                     _____ ac
      |            ________________________|
      |___________|                        |____ ad
                  |
                  |______________________ ae



```

With every species having a recorded, author-by-author history:

```

Jamal
. ,-"-.   ,-"-. ,-"-.   ,-"-. ,-"-.   ,
 X | | \ / | | 4 | | \ / | | X | | \ /
/ \| | |T| | |/ \| | |X| | |/ \| | |X|
   `-!-' `-!-"   `-!-' `-!-'   `-!-' `-

Timon
. ,-"-.   ,-"-. ,-"-.   ,-"-. ,-"-.   ,
 X | | \ / | | 4 | | \ / | | X | | \ /
/ \| | |T| | |/ \| | |Y| | |/ \| | |X|
   `-!-' `-!-"   `-!-' `-!-'   `-!-' `-

Erica
. ,-"-.   ,-"-. ,-"-.   ,-"-. ,-"-.   ,
X | | \ / | | 4 | | \ / | | X | | \ /
/ \| | |Y| | |/ \| | |Y| | |/ \| | |X|
`-!-' `-!-"   `-!-' `-!-'   `-!-' `-

Alice
. ,-"-.   ,-"-. ,-"-.   ,-"-. ,-"-.   ,
X | | \ / | | 2 | | \ / | | X | | \ /
/ \| | |Y| | |/ \| | |Y| | |/ \| | |X|
`-!-' `-!-"   `-!-' `-!-'   `-!-' `-

Bruce
. ,-"-.   ,-"-. ,-"-.   ,-"-. ,-"-.   ,
Y | | \ / | | 2 | | \ / | | X | | \ /
/ \| | |Y| | |/ \| | |Y| | |/ \| | |X|
`-!-' `-!-"   `-!-' `-!-'   `-!-' `-

Sam
. ,-"-.   ,-"-. ,-"-.   ,-"-. ,-"-.   ,
Y | | \ / | | 2 | | \ / | | 7 | | \ /
/ \| | |Y| | |/ \| | |Y| | |/ \| | |X|
`-!-' `-!-"   `-!-' `-!-'   `-!-' `-

```


# Thoughts

## Guided evolution
You should really start the game with a single species, and then it must evolve outward to everything else. Because the amount of change you can make in a single generation is limited, in order to make a completely different organism, you need to go first live through an ancestry of successful parents.

## Is it fun?
Setting small goals in evolution - like making the world's first deciduous plant - would be cool to achieve. Also social interaction when players evolve on your species.

## Species
It would be really cool to have a globally visible evolutionary tree that acts kind of like a leaderboard. This would mean grouping grouping similar species together. This might involve some math, though, as in reality a species would kind of have a gradient genome over geographic distance. In reality, things like mountains serve to separate one species from another, and I suppose I could simulate this.

The easiest way to have different species though, is to just start the game with like 5 pretty different genomes, and anything evolved from them is one species. But the problem is that after enough time, every species would just have evolved to cover the whole globe, even if two different specimens of the same species are actually very genetically different.

So maybe some clustering algorithm? Not really sure.

## Global events
Ice age, global warming, etc. would really make people adapt to the environment and make the whole game more dynamic. How about we go back to the cretacious period, when everything was ferns? Or bump the temperature down and kill off all tropical plants?

## Regional maps
Either hex or square grid. Idea: "nodes" are hidden objects with a bunch of environmental data. Nodes could even be lakes! Then, grow-zones actually transition from one node to another. So, the "hidden" representation:

```
"Hidden" representation used for climate calculation
 n = node
 z = grow zone

        n             n
      /   \          /
     /     \        /
    z       z      z
   /         \    /
  /           \  /
 n  ----z----  n -----z---- n
  \           /  \
   \         /    \
    z       z      z
     \     /        \
      \   /          \
        n             n

"Regional" representation used for seed dispersal, conquest

       z             z
     /   \          /
    /     \        /
   /       \      /
  /         \    /
 /           \  /
z  ---------  z ---------- z
 \           /  \
  \         /    \
   \       /      \
    \     /        \
     \   /          \
       z             z

```

## On organizing plant phenotypes
I could see grouping by function, or by organ. If by organ, there should be some unified way to specify growth patterns.

```
respiration
>> stomata
>>>> growth priority *6*
>>>> open when humidity >= *42%*

insulation
>> trichomes
>> wax
>> secondary growth
```

## On the range of plant phenotypes

Any trait should either enable a new growth strategy, give rise to a new physical form, or let a plant respond to environmental factors, in that order of importance.

Example: How much of their resources do plants stockpile during the winter?
A: In woody plants, big stockpiles are more conservative and lead to a better winter survival chance at the cost of growth during the spring. Small stockpiles mean the plant is more efficient at storage, at the cost of a riskier winter. In deciduous plants, big stockpiles are a must to provide energy in the winter and to fund spring growth of fresh leaves. On the other hand, summer annuals don't need to save anything at all.

Example: How much primary vs. secondary growth is there?
A: If the plant invests mostly in secondary growth, it will be more resistant to extreme temperatures (fire, cold), but it will not grow as quickly.

Example: Leaves alternate, opposite? Simple, palmate or pinnate? This might be modelled by having a branching probability, a branching factor, a max branching depth, and culling chance. Maybe all factors can be influenced by environmental conditions.

```
> Branch chance: .05
> Branching depth: 3
> Branching factor: 2
> Culling chance: .4


      '.,
        'b      *
         '$    #.
          $:   #:
          *#  @):
          :@,@):   ,.**:'
,         :@@*: ..**'
 '#o.    .:(@'.@*"'
    'bq,..:,@@*'   ,*
    ,p$q8,:@)'  .p*'
   '    '@@Pp@@*'
         Y7'.'
        :@):.
       .:@:'.
     .::(@:.      -Credit Sam Blumenstein-


 > Branch chance: .1
 > Branching depth: 6
 > Branching factor: 2
 > Culling chance: .4


               ''         ''''
              *''            ''
            **#o*             '',.**:'
           ***            ..**'
            '#o.         .@*"**'''
   ''''''''''''bq,..:,@@*'      '**'''''
        **       p$q8,:@)'         ''
        *         '@@Pp'            ''**
      *             Y7'.'
                   :@):.
                  .:@:'.
                .::(@:.


> Branch chance: .02
> Branching depth: 1
> Branching factor: 5
> Culling chance: .4


              ''     '    ''''
             *''    *        ''
           **#     s          ''
          ***     q       ..**'
           '#o.  pp     .@*"
             ''b@@..:,@@*'
             pppp$8,@'@@**))''''''
           (@    :@)'
   ''**ddd()     ,:@)
                 $q:)
                 p$8''
                  p$:@)'
                 '@@p'
                   Y7'.'
                  :@):.
                 .:@:'.
                .:@:'.
                .::(@:.
                .:@:'.
               .::(@:.
               .::(@:.
              .::@)::'.
              .::(@:..
              .::(@:..
              .::@@:..
              .::((@:..
              .::((@@:..



```

Example: What size are the leaves?
A: Big leaves lose more heat, are a bigger investment (bad for deciduous), and are more likely to fall off. Thus they perform better in warm climates without strong winds or freezing.

Make as little assumptions about growth patterns as possible. Players need to be able to exactly time every stage of growth. That means what time of year they sprout, how fast they grow.

```
>> Growth start when resources is: XX
```

Also want to capture the physical variation in plants that exist. Players also need to be able to program branch timing. Bushes would use a high branch factor, wheras trees would use a smaller one, for instance. In addition, to what degree do new sprouts change the course of the branch to find sunlight?

## On competition
Plants shade out other plants and compete for resources like water. Most well-developed ecosystems will be at a point where it is hard to find the resources needed to survive without a carefully crafted organism. Maybe parasitic plants.

## On sunlight
Need to be able to represent variable levels of sunlight during the day. This can be done with a light "direction" that moves from the right side to the left side of the screen, for which existing branches cast shadows.

```

Dawn
<-----

Morning
    /
   /
 |/_

Noon
 |
 |
 v

```

But this strategy is a little too direct and doesn't allow for ambient light caused by reflection. To make it a bit better, I could kind of 'raycast' from the light source down into the simulation.

However, this wouldn't be perfect because a 2d raycast would have a lot less ambient light than a 3d (real-world) raycast. I think you could acommodate this by bumping up the ambient light by putting albedo to the power of 3/2.

2d simulation:
Light hits a plant and is absorbed (multiplied by albedo α), then is reflected, experiencing falloff at a rate of k / d<sup>2</sup>. Incoming light comes from all sources in the same plane (2-d).

Assume that in 2 space, plants are placed as close as they can be:

```
p_3 ----d---- p_1 ----d---- p_2
```

3d simulation:
Falloff is k / d<sup>3</sup>. Incoming light comes from all sources in the same 3-space.

The distance limitation in 3 space would look like:

```
       p_4           p_3
      /   \          /
     /     \        /
    d       d      d
   /         \    /
  /           \  /
p_5 ----d---- p_1 -----d---- p_2
  \           /  \
   \         /    \
    d       d      d
     \     /        \
      \   /          \
       p_6           p_7

```

So, if plants grew optimally close, then if a plant in 2-d had 2 neighbors of its own species, the same plant in 3-d would have 6 neighbors. Not really sure about the math here for multiple species. I think the best approach would be to model each plant as having its own "sphere of influence" given by some starting weight and a falloff. Ultimately we want to get the same "density" in 3-space as we did in 2-space. Do I need measure theory for this?

## On lakes, rivers
Might be cool to add some extra local variation to soil hydration.

## On resources
A plant has a few different requirements for growth: water, nutrients, and sunlight. Water and nutrients it gets from the soil, and light it gets from the sun, and then processes it immediately, or converts it into sugars for storage. As far as soil nutrients (Potassium, Nitrogen, etc.), I don't like differentiating too much because in the wild soil nutrient levels are *relatively* static, and plants can probably just make subtle adjustments in their chemical structure to acommodate similar molecules. So, I'll only differentiate between main groups of nutrients, like phosphates and nitrates. Then plants can adapt their growth strategies; chlorophyll and reproduction cost nitrogen,

## On dangers
Core danger: unable to get the nutrients it needs.

Definite dangers: fire, winter

"Maybe" dangers: nutrient depletion, bugs (underground & in air), toxins/pollution in soil/air, birds, animals

## On soil, weather
It would be cool to simulate water table levels, so that for instance cactis would have to branch out wide and shallow, and rain would hydrate the top layer and percolate downward.

I think the best way to do this would be to give each soil, water voxel a "hydration value"; the amount of water a given voxel can hold is based on temperature and soil type.

## On seasons
Seasons and significant land events like fire are necessary to simulate how plants fight for an ecosystem when they are on equal footing to occupy a new area.

## On land development
It might be necssary to have very high volcanism to develop the world as new players join. A barren start world is no fun, but it's also important to simulate the competition for new space.

## On epigenetics
You should be able to change some of the genome maybe once or twice during the plant's life.

# Technical implementation

Behavior of a given cell

Inputs: nutrient levels, hormone levels
Outputs: growth, division, hormone production,

If this could be made paramaterizable, then we can encode it in DNA, or

## Starting growth

Plant seed
```
+----------------------------------+
|                                  |
|     +-----------------------+    |
|     |                       |    |
|     |   Endosperm           |    |
|     |                       |    |
|     +-----------------------+    |
|     |                       |    |
|     |   Zygote              |    |
|     |                       |    |
|     +-----------------------+    |
|                                  |
+----------------------------------+
```
