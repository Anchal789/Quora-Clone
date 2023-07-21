const questions = {
    history: [
        {
            id: 1,
            question: "What were the main causes and consequences of the French Revolution?",
            answer: "The French Revolution was primarily caused by social inequality, political corruption, and economic hardship. Its consequences included the rise of Napoleon Bonaparte, the spread of revolutionary ideas, and significant political and social changes in France and Europe.",
        },
        {
            id: 2,
            question: "What were the key factors leading to the decline of the Roman Empire?",
            answer: "The decline of the Roman Empire was influenced by factors such as internal political instability, economic challenges, barbarian invasions, and military overstretch. These factors gradually weakened the empire and led to its eventual fall in 476 CE.",
        },
        {
            id: 3,
            question: "What were the causes and impacts of the Industrial Revolution?",
            answer: "The Industrial Revolution was caused by technological advancements, the growth of factories, and changes in agricultural practices. It had significant impacts on society, including urbanization, improved living standards for some, poor working conditions for others, and the rise of capitalism.",
        },
        {
            id: 4,
            question: "What were the main events and outcomes of the American Civil War?",
            answer: "The American Civil War was fought between the northern Union states and the southern Confederate states over issues such as slavery and states' rights. The war resulted in the abolition of slavery, the preservation of the Union, and the emergence of a more centralized federal government in the United States.",
        },
        {
            id: 5,
            question: "What factors contributed to the rise and fall of the British Empire?",
            answer: "The rise of the British Empire can be attributed to factors such as exploration, trade, colonization, industrialization, and naval dominance. The empire's decline resulted from various factors, including economic challenges, independence movements in colonies, and the impact of World War II.",
        },
        {
            id: 6,
            question: "What were the causes and consequences of the Russian Revolution?",
            answer: "The Russian Revolution was driven by factors like social inequality, political discontent, and the impact of World War I. It led to the overthrow of the monarchy, the rise of the Soviet Union, and significant social, political, and economic transformations in Russia.",
        },
        {
            id: 7,
            question: "What were the key factors that led to the outbreak of World War I?",
            answer: "The outbreak of World War I was caused by factors such as militarism, nationalism, imperial rivalries, and the assassination of Archduke Franz Ferdinand of Austria-Hungary. The war resulted in widespread devastation, millions of casualties, and significant political and territorial changes.",
        },
        {
            id: 8,
            question: "What were the main causes and consequences of the Great Depression?",
            answer: "The Great Depression was caused by factors such as stock market crash, overproduction, banking failures, and economic downturn. Its consequences included high unemployment rates, poverty, government intervention in the economy, and the reevaluation of economic policies.",
        },
        {
            id: 9,
            question: "What were the major events and outcomes of the Cold War?",
            answer: "The Cold War was a period of geopolitical tension between the United States and the Soviet Union. Major events included the arms race, the space race, proxy wars, and the fall of the Berlin Wall. The Cold War ended with the dissolution of the Soviet Union, marking a victory for the United States and the West.",
        },
        {
            id: 10,
            question: "What were the causes and consequences of the colonization of Africa?",
            answer: "The colonization of Africa was driven by factors such as European economic interests, competition for resources, and the ideology of imperialism. The consequences included the exploitation of African resources, the imposition of European political systems, the disruption of indigenous cultures, and the long-lasting effects of colonialism on the continent.",
        },
        {
            id: 11,
            question: "What were the main causes and outcomes of the American Revolution?",
            answer: "The American Revolution was sparked by grievances against British colonial rule, including issues of taxation without representation and infringements on individual rights. It resulted in the establishment of the United States as an independent nation, the writing of the Declaration of Independence, and the adoption of a new constitution.",
        },
        {
            id: 12,
            question: "What were the causes and effects of the Protestant Reformation?",
            answer: "The Protestant Reformation was caused by religious discontent, corruption within the Catholic Church, and the spread of humanist ideas. It led to the splintering of Christianity into various Protestant denominations, religious wars, and long-term changes in religious and political landscapes in Europe.",
        },
        {
            id: 13,
            question: "What were the key events and consequences of the Holocaust during World War II?",
            answer: "The Holocaust was the systematic genocide of six million Jews by Nazi Germany during World War II. The key events included the establishment of concentration camps, mass killings, and the Final Solution. The Holocaust had profound and devastating consequences, leaving a lasting impact on Jewish communities and shaping global discussions on human rights and genocide prevention.",
        },
        {
            id: 14,
            question: "What were the causes and outcomes of the Renaissance?",
            answer: "The Renaissance was caused by a combination of factors, including the rediscovery of ancient knowledge, advancements in art and science, patronage of the arts, and the rise of humanism. It resulted in significant cultural, intellectual, and artistic achievements, as well as changes in societal values and the emergence of new ideas.",
        },
        {
            id: 15,
            question: "What were the factors that led to the signing of the Treaty of Versailles after World War I?",
            answer: "The signing of the Treaty of Versailles was influenced by factors such as the desire for peace, the need to assign blame for the war, and negotiations among world leaders. The treaty imposed harsh conditions on Germany, leading to resentment and contributing to future geopolitical tensions.",
        },
        {
            id: 16,
            question: "What were the main causes and consequences of the Age of Exploration?",
            answer: "The Age of Exploration was motivated by factors such as the search for new trade routes, wealth, and scientific curiosity. It resulted in the expansion of European empires, the Columbian Exchange, cultural exchanges, and the establishment of colonial territories around the world.",
        },
        {
            id: 17,
            question: "What were the causes and impacts of the Chinese Cultural Revolution?",
            answer: "The Chinese Cultural Revolution was initiated by Mao Zedong to reassert his authority and eliminate perceived threats to the Communist Party. It resulted in political purges, social upheaval, and widespread violence, leading to the loss of countless lives and profound disruptions to Chinese society and culture.",
        },
        {
            id: 18,
            question: "What were the causes and consequences of the Women's Suffrage Movement?",
            answer: "The Women's Suffrage Movement was driven by the demand for gender equality, political rights, and social reform. It resulted in the expansion of women's suffrage, advancements in women's rights, and a broader recognition of gender equalityin many societies around the world."
        },
        {
            id: 19,
            question: "What were the main causes and outcomes of the Cuban Revolution?",
            answer: "The Cuban Revolution was primarily motivated by socioeconomic inequality, political corruption, and opposition to U.S. influence. It led to the rise of Fidel Castro and the establishment of a socialist government in Cuba, with significant impacts on Cuban society, politics, and international relations.",
        },
        {
            id: 20,
            question: "What were the causes and effects of the Opium Wars between China and Western powers?",
            answer: "The Opium Wars were triggered by tensions over trade, particularly the British export of opium to China. The wars resulted in Chinese territorial concessions, unequal treaties, and the erosion of China's sovereignty. They also marked a significant shift in the balance of power between China and Western powers.",
        }
    ],
    business: [
        {
            id: 1,
            question: "What are the main differences between a sole proprietorship and a partnership?",
            answers: [
                "Sole Proprietorship: A business owned and operated by a single individual.",
                "Partnership: A business owned and operated by two or more individuals."
            ],
            imageUrl: "https://example.com/soleproprietorship_partnership.jpg"
        },
        {
            id: 2,
            question: "What is the difference between revenue and profit in business?",
            answers: [
                "Revenue: The total amount of money generated from sales or services.",
                "Profit: The amount of money remaining after deducting expenses from revenue."
            ],
            imageUrl: "https://example.com/revenue_profit.jpg"
        },
        {
            id: 3,
            question: "What are the main types of business organizations?",
            answers: [
                "Sole Proprietorship, Partnership, Corporation, and Limited Liability Company (LLC).",
                "There are no specific types of business organizations."
            ],
            imageUrl: "https://example.com/business_organizations.jpg"
        },
        {
            id: 4,
            question: "What is the difference between gross profit and net profit?",
            answers: [
                "Gross Profit: The total revenue minus the cost of goods sold.",
                "Net Profit: The total revenue minus all expenses, including cost of goods sold and operating expenses."
            ],
            imageUrl: "https://example.com/grossprofit_netprofit.jpg"
        },
        {
            id: 5,
            question: "What are the main differences between a product-based business and a service-based business?",
            answers: [
                "Product-based Business: Sells physical goods to customers.",
                "Service-based Business: Provides intangible services to customers."
            ],
            imageUrl: "https://example.com/product_service_business.jpg"
        },
        {
            id: 6,
            question: "What is the difference between a business plan and a marketing plan?",
            answers: [
                "Business Plan: Outlines the overall goals, strategies, and financial projections of a business.",
                "Marketing Plan: Focuses on the marketing objectives, strategies, and tactics of a business."
            ],
            imageUrl: "https://example.com/businessplan_marketingplan.jpg"
        },
        {
            id: 7,
            question: "What are the main types of marketing strategies used by businesses?",
            answers: [
                "Digital marketing, content marketing, social media marketing, and influencer marketing.",
                "There are no specific types of marketing strategies."
            ],
            imageUrl: "https://example.com/marketing_strategies.jpg"
        },
        {
            id: 8,
            question: "What is the difference between a mission statement and a vision statement in business?",
            answers: [
                "Mission Statement: Defines the purpose and goals of a business, highlighting what it does and who it serves.",
                "Vision Statement: Describes the long-term aspirations and future direction of a business."
            ],
            imageUrl: "https://example.com/missionstatement_visionstatement.jpg"
        },
        {
            id: 9,
            question: "What are the main types of business financing options available?",
            answers: [
                "Debt financing, equity financing, and bootstrapping (self-financing).",
                "There are no specific types of business financing options."
            ],
            imageUrl: "https://example.com/business_financing.jpg"
        },
        {
            id: 10,
            question: "What is the difference between marketing and advertising?",
            answers: [
                "Marketing: Involves various activities to promote and sell products or services.",
                "Advertising: A specific subset of marketing that focuses on paid communication through various channels."
            ],
            imageUrl: "https://example.com/marketing_advertising.jpg"
        },
        {
            id: 11,
            question: "What are the main components of a business model?",
            answers: [
                "Value proposition, target market, revenue streams, cost structure, and key resources.",
                "There are no specific components in a business model."
            ],
            imageUrl: "https://example.com/business_model.jpg"
        },
        {
            id: 12,
            question: "What is the difference between a retail business and a wholesale business?",
            answers: [
                "Retail Business: Sells products directly to end consumers.",
                "Wholesale Business: Sells products in bulk to other businesses or retailers."
            ],
            imageUrl: "https://example.com/retail_wholesale_business.jpg"
        },
        {
            id: 13,
            question: "What are the main differences between a trademark and a copyright?",
            answers: [
                "Trademark: Protects logos, names, or symbols that distinguish a business.",
                "Copyright: Protects original creative works, such as writings, music, or artwork."
            ],
            imageUrl: "https://example.com/trademark_copyright.jpg"
        },
        {
            id: 14,
            question: "What is the difference between a business-to-business (B2B) and a business-to-consumer (B2C) business model?",
            answers: [
                "B2B: Sells products or services to other businesses.",
                "B2C: Sells products or services directly to consumers."
            ],
            imageUrl: "https://example.com/b2b_b2c.jpg"
        },
        {
            id: 15,
            question: "What are the main factors to consider when pricing a product or service?",
            answers: [
                "Costs, competition, target market, value proposition, and profit margins.",
                "There are nospecific factors to consider when pricing a product or service."
            ],
            imageUrl: "https://example.com/pricing_factors.jpg"
        },
        {
            id: 16,
            question: "What is the difference between a business-to-business (B2B) and a business-to-consumer (B2C) marketing approach?",
            answers: [
                "B2B: Focuses on building relationships with businesses and providing value in terms of efficiency, cost savings, and partnerships.",
                "B2C: Focuses on reaching and persuading individual consumers, often emphasizing emotional appeals and convenience."
            ],
            imageUrl: "https://example.com/b2b_b2c_marketing.jpg"
        },
        {
            id: 17,
            question: "What are the main differences between a small business and a large corporation?",
            answers: [
                "Small Business: Typically privately owned and operated, with fewer employees and a smaller scale of operations.",
                "Large Corporation: A publicly traded company with a complex organizational structure, extensive resources, and a global presence."
            ],
            imageUrl: "https://example.com/smallbusiness_largecorporation.jpg"
        },
        {
            id: 18,
            question: "What is the difference between a business strategy and a marketing strategy?",
            answers: [
                "Business Strategy: Focuses on achieving overall business goals and creating a competitive advantage.",
                "Marketing Strategy: Focuses on achieving marketing objectives and promoting products or services."
            ],
            imageUrl: "https://example.com/businessstrategy_marketingstrategy.jpg"
        },
        {
            id: 19,
            question: "What are the main differences between a business plan and a financial plan?",
            answers: [
                "Business Plan: Outlines the goals, strategies, and financial projections of a business.",
                "Financial Plan: Focuses specifically on the financial aspects of a business, such as budgeting, cash flow management, and financial forecasting."
            ],
            imageUrl: "https://example.com/businessplan_financialplan.jpg"
        },
        {
            id: 20,
            question: "What is the difference between a business asset and a business liability?",
            answers: [
                "Business Asset: Something of value that a business owns or controls and can generate future economic benefits.",
                "Business Liability: A business's legal obligations or debts that arise from past transactions or events."
            ],
            imageUrl: "https://example.com/business_asset_liability.jpg"
        }
    ],
    psychology: [
        {
            id: 1,
            question: "What is the role of neurotransmitters in the brain?",
            answers: [
                "Neurotransmitters are chemical messengers that transmit signals between neurons.",
                "Neurotransmitters are responsible for storing long-term memories in the brain."
            ]
        },
        {
            id: 2,
            question: "What is the relationship between nature and nurture in human development?",
            answers: [
                "Nature and nurture both play a role in shaping human development.",
                "Human development is solely determined by genetic factors."
            ]
        },
        {
            id: 3,
            question: "What is the concept of cognitive dissonance?",
            answers: [
                "Cognitive dissonance refers to the mental discomfort caused by holding conflicting beliefs or attitudes.",
                "Cognitive dissonance is the process of selectively attending to information that confirms pre-existing beliefs."
            ]
        },
        {
            id: 4,
            question: "What are the major theories of intelligence?",
            answers: [
                "Theories of intelligence include the psychometric, multiple intelligences, and triarchic theories.",
                "There is a single, universally accepted theory of intelligence."
            ]
        },
        {
            id: 5,
            question: "What is the impact of stress on physical and mental health?",
            answers: [
                "Chronic stress can have detrimental effects on both physical and mental health.",
                "Stress has no impact on physical or mental health."
            ]
        },
        {
            id: 6,
            question: "What is the role of schemas in cognitive development?",
            answers: [
                "Schemas are mental frameworks that help organize and interpret information.",
                "Schemas have no impact on cognitive development."
            ]
        },
        {
            id: 7,
            question: "What are the main theories of motivation?",
            answers: [
                "Theories of motivation include the hierarchy of needs, self-determination, and expectancy theories.",
                "Motivation is solely driven by external rewards and punishments."
            ]
        },
        {
            id: 8,
            question: "What is the concept of social identity and its impact on behavior?",
            answers: [
                "Social identity refers to the part of an individual's self-concept that is based on group membership.",
                "Social identity has no impact on an individual's behavior."
            ]
        },
        {
            id: 9,
            question: "What are the major theories of emotion?",
            answers: [
                "Theories of emotion include the James-Lange, Cannon-Bard, and two-factor theories.",
                "There is a single, universally accepted theory of emotion."
            ]
        },
        {
            id: 10,
            question: "What is the concept of priming in cognitive psychology?",
            answers: [
                "Priming is the process by which exposure to a stimulus influences subsequent behavior or perception.",
                "Priming has no impact on cognitive processes."
            ]
        },
        // Add more complex questions with two answers here...
    ],

    cooking: [
        {
            id: 1,
            question: "What is the difference between baking soda and baking powder?",
            answers: [
                "Baking soda requires an acidic ingredient to activate and produce carbon dioxide.",
                "Baking powder already contains an acid, so it can react with liquid and produce carbon dioxide on its own."
            ]
        },
        {
            id: 2,
            question: "What is the purpose of marinating meat?",
            answers: [
                "Marinating meat helps tenderize it and infuse it with flavor.",
                "Marinating meat is solely for enhancing its appearance."
            ]
        },
        {
            id: 3,
            question: "What is the effect of salt on yeast when baking bread?",
            answers: [
                "Salt regulates yeast activity and strengthens the gluten structure in bread dough.",
                "Salt has no impact on yeast activity when baking bread."
            ]
        },
        {
            id: 4,
            question: "What is the role of roux in sauce-making?",
            answers: [
                "Roux acts as a thickening agent and adds flavor to sauces.",
                "Roux is used solely for coloring purposes in sauces."
            ]
        },
        {
            id: 5,
            question: "What is the difference between sautéing and pan-frying?",
            answers: [
                "Sautéing involves cooking food quickly in a small amount of oil over high heat.",
                "Pan-frying requires deep frying food in a large amount of oil."
            ]
        },
        {
            id: 6,
            question: "What is the purpose of blanching vegetables?",
            answers: [
                "Blanching vegetables helps preserve their color, texture, and nutritional value.",
                "Blanching vegetables is solely for enhancing their taste."
            ]
        },
        {
            id: 7,
            question: "What is the difference between simmering and boiling?",
            answers: [
                "Simmering is cooking food gently in liquid at a temperature just below boiling.",
                "Boiling involves cooking food vigorously in liquid at a high temperature."
            ]
        },
        {
            id: 8,
            question: "What is the effect of acid, such as lemon juice, on fruits?",
            answers: [
                "Acid, like lemon juice, can prevent fruits from browning and add brightness to their flavor.",
                "Acid has no impact on fruits when used in cooking or preserving."
            ]
        },
        {
            id: 9,
            question: "What is the purpose of resting meat after cooking?",
            answers: [
                "Resting meat allows the juices to redistribute, resulting in a more tender and flavorful dish.",
                "Resting meat has no impact on its texture or taste."
            ]
        },
        {
            id: 10,
            question: "What is the difference between a stock and a broth?",
            answers: [
                "Stock is made by simmering bones, while broth is made by simmering meat and vegetables.",
                "Stock and broth are interchangeable terms for the same thing."
            ]
        },
        // Add more complex cooking questions with two answers here...
    ],

    music: [
        {
            id: 1,
            question: "What is the difference between a major and a minor key?",
            answers: [
                "Major key: Generally associated with a bright, happy, or uplifting mood.",
                "Minor key: Generally associated with a melancholic, sad, or dark mood."
            ],
            imageUrl: "https://example.com/major_minor.jpg"
        },
        {
            id: 2,
            question: "What are the main types of musical instruments in an orchestra?",
            answers: [
                "String, woodwind, brass, and percussion instruments.",
                "Piano, guitar, drums, and saxophone."
            ],
            imageUrl: "https://example.com/orchestra.jpg"
        },
        {
            id: 3,
            question: "What is the difference between a symphony and a concerto?",
            answers: [
                "Symphony: Orchestral composition, usually in multiple movements.",
                "Concerto: Solo instrument accompanied by an orchestra."
            ],
            imageUrl: "https://example.com/symphony_concerto.jpg"
        },
        {
            id: 4,
            question: "What are the main vocal ranges in singing?",
            answers: [
                "Soprano, alto, tenor, and bass.",
                "High, medium, low, and falsetto."
            ],
            imageUrl: "https://example.com/vocal_ranges.jpg"
        },
        {
            id: 5,
            question: "What are the different types of musical genres?",
            answers: [
                "Rock, pop, jazz, classical, hip-hop, country, and electronic, among others.",
                "Music has no specific genres; it is all the same."
            ],
            imageUrl: "https://example.com/music_genres.jpg"
        },
        {
            id: 6,
            question: "What is the role of a conductor in an orchestra?",
            answers: [
                "Conductors lead and coordinate the musicians in an orchestra.",
                "Conductors have no significant role in an orchestra."
            ],
            imageUrl: "https://example.com/conductor.jpg"
        },
        {
            id: 7,
            question: "What is the difference between legato and staccato in music?",
            answers: [
                "Legato: Smooth and connected notes.",
                "Staccato: Short and detached notes."
            ],
            imageUrl: "https://example.com/legato_staccato.jpg"
        },
        {
            id: 8,
            question: "What are the main components of a drum set?",
            answers: [
                "Bass drum, snare drum, toms, hi-hat, cymbals, and pedals.",
                "Drums have no specific components; it is all the same."
            ],
            imageUrl: "https://example.com/drum_set.jpg"
        },
        {
            id: 9,
            question: "What is the difference between a solo and a duet in music?",
            answers: [
                "Solo: Performance by a single musician or vocalist.",
                "Duet: Performance involving two musicians or vocalists."
            ],
            imageUrl: "https://example.com/solo_duet.jpg"
        },
        {
            id: 10,
            question: "What are the main types of guitars?",
            answers: [
                "Acoustic, electric, classical, and bass guitars.",
                "Guitars have no different types; it is all the same."
            ],
            imageUrl: "https://example.com/guitars.jpg"
        },
    ],
    science: [
        {
            id: 1,
            question: "What is the difference between a chemical change and a physical change?",
            answers: [
                "Chemical change: Results in the formation of new substances with different properties.",
                "Physical change: Does not result in the formation of new substances."
            ],
            imageUrl: "https://example.com/chemical_physical_change.jpg"
        },
        {
            id: 2,
            question: "What are the main branches of science?",
            answers: [
                "Physics, chemistry, biology, astronomy, geology, and more.",
                "Science does not have any specific branches; it is all the same."
            ],
            imageUrl: "https://example.com/science_branches.jpg"
        },
        {
            id: 3,
            question: "What are the main stages of the water cycle?",
            answers: [
                "Evaporation, condensation, precipitation, and runoff.",
                "There are no specific stages in the water cycle; it is a continuous process."
            ],
            imageUrl: "https://example.com/water_cycle.jpg"
        },
        {
            id: 4,
            question: "What is the difference between a prokaryotic cell and a eukaryotic cell?",
            answers: [
                "Prokaryotic cell: Lacks a nucleus and membrane-bound organelles.",
                "Eukaryotic cell: Contains a nucleus and membrane-bound organelles."
            ],
            imageUrl: "https://example.com/prokaryotic_eukaryotic.jpg"
        },
        {
            id: 5,
            question: "What are the main types of energy?",
            answers: [
                "Kinetic, potential, thermal, chemical, electrical, and more.",
                "Energy has no specific types; it is all the same."
            ],
            imageUrl: "https://example.com/energy_types.jpg"
        },
        {
            id: 6,
            question: "What are the main layers of the Earth?",
            answers: [
                "Crust, mantle, outer core, and inner core.",
                "Earth does not have any specific layers; it is all the same."
            ],
            imageUrl: "https://example.com/earth_layers.jpg"
        },
        {
            id: 7,
            question: "What are the main steps of the scientific method?",
            answers: [
                "Observation, question, hypothesis, experiment, analysis, conclusion.",
                "There are no specific steps in the scientific method; it is an unstructured process."
            ],
            imageUrl: "https://example.com/scientific_method.jpg"
        },
        {
            id: 8,
            question: "What are the main types of waves?",
            answers: [
                "Transverse waves and longitudinal waves.",
                "Waves have no specific types; they are all the same."
            ],
            imageUrl: "https://example.com/waves.jpg"
        },
        {
            id: 9,
            question: "What is the difference between speed and velocity?",
            answers: [
                "Speed: Scalar quantity representing the rate at which an object moves.",
                "Velocity: Vector quantity representing the rate at which an object moves in a specific direction."
            ],
            imageUrl: "https://example.com/speed_velocity.jpg"
        },
        {
            id: 10,
            question: "What are the main components of the solar system?",
            answers: [
                "Sun, planets, moons, asteroids, comets, and more.",
                "The solar system does not have any specific components; it is all thesame."
            ],
            imageUrl: "https://example.com/solar_system.jpg"
        },
        {
            id: 11,
            question: "What are the main types of chemical bonds?",
            answers: [
                "Ionic bonds, covalent bonds, and metallic bonds.",
                "Chemical bonds have no specific types; they are all the same."
            ],
            imageUrl: "https://example.com/chemical_bonds.jpg"
        },
        {
            id: 12,
            question: "What is the difference between a hypothesis and a theory in science?",
            answers: [
                "Hypothesis: A testable explanation for a specific observation or phenomenon.",
                "Theory: A well-substantiated explanation supported by multiple lines of evidence."
            ],
            imageUrl: "https://example.com/hypothesis_theory.jpg"
        },
        {
            id: 13,
            question: "What are the main components of the electromagnetic spectrum?",
            answers: [
                "Radio waves, microwaves, infrared, visible light, ultraviolet, X-rays, and gamma rays.",
                "The electromagnetic spectrum does not have any specific components; it is all the same."
            ],
            imageUrl: "https://example.com/electromagnetic_spectrum.jpg"
        },
        {
            id: 14,
            question: "What is the difference between mitosis and meiosis?",
            answers: [
                "Mitosis: Cell division resulting in two identical daughter cells.",
                "Meiosis: Cell division resulting in four genetically diverse daughter cells."
            ],
            imageUrl: "https://example.com/mitosis_meiosis.jpg"
        },
        {
            id: 15,
            question: "What are the main properties of acids and bases?",
            answers: [
                "Acids: Sour taste, turn blue litmus paper red, react with metals.",
                "Bases: Bitter taste, turn red litmus paper blue, feel slippery."
            ],
            imageUrl: "https://example.com/acids_bases.jpg"
        },
        {
            id: 16,
            question: "What is the difference between a renewable resource and a non-renewable resource?",
            answers: [
                "Renewable resource: Can be replenished naturally over time.",
                "Non-renewable resource: Cannot be replenished within a reasonable time frame."
            ],
            imageUrl: "https://example.com/renewable_nonrenewable.jpg"
        },
        {
            id: 17,
            question: "What are the main parts of a flower?",
            answers: [
                "Petals, sepals, stamen, and pistil.",
                "Flowers do not have any specific parts; they are all the same."
            ],
            imageUrl: "https://example.com/flower_parts.jpg"
        },
        {
            id: 18,
            question: "What is the difference between a gene and an allele?",
            answers: [
                "Gene: Segment of DNA that carries the instructions for a specific trait.",
                "Allele: Alternate form of a gene that can produce different variations of a trait."
            ],
            imageUrl: "https://example.com/gene_allele.jpg"
        },
        {
            id: 19,
            question: "What are the main types of fossils?",
            answers: [
                "Body fossils, trace fossils, and mineralized fossils.",
                "Fossils have no specific types; they are all the same."
            ],
            imageUrl: "https://example.com/fossil_types.jpg"
        },
        {
            id: 20,
            question: "What is the difference between weather and climate?",
            answers: [
                "Weather: Short-term atmospheric conditions in a specific region.",
                "Climate:Long-term patterns of weather in a specific region."
            ],
            imageUrl: "https://example.com/weather_climate.jpg"
        }
        // Add more complex science questions with two answers and image URLs here...
    ],

    health: [
        {
            id: 1,
            question: "What is the difference between aerobic exercise and anaerobic exercise?",
            answers: [
                "Aerobic exercise: Involves continuous movement that increases cardiovascular endurance.",
                "Anaerobic exercise: Involves short bursts of intense activity that build muscle strength."
            ],
            imageUrl: "https://example.com/aerobic_anaerobic.jpg"
        },
        {
            id: 2,
            question: "What are the main components of a balanced diet?",
            answers: [
                "Carbohydrates, proteins, fats, vitamins, minerals, and water.",
                "There are no specific components in a balanced diet; it is all the same."
            ],
            imageUrl: "https://example.com/balanced_diet.jpg"
        },
        {
            id: 3,
            question: "What is the difference between LDL cholesterol and HDL cholesterol?",
            answers: [
                "LDL cholesterol: Considered 'bad' cholesterol that can contribute to heart disease.",
                "HDL cholesterol: Considered 'good' cholesterol that helps remove LDL cholesterol from the bloodstream."
            ],
            imageUrl: "https://example.com/ldl_hdl_cholesterol.jpg"
        },
        {
            id: 4,
            question: "What are the main symptoms of a heart attack?",
            answers: [
                "Chest pain or discomfort, shortness of breath, nausea, and lightheadedness.",
                "There are no specific symptoms of a heart attack; they vary from person to person."
            ],
            imageUrl: "https://example.com/heart_attack.jpg"
        },
        {
            id: 5,
            question: "What is the difference between a cold and the flu?",
            answers: [
                "Cold: Usually milder symptoms such as a runny nose and sore throat.",
                "Flu: Often more severe symptoms including fever, body aches, and fatigue."
            ],
            imageUrl: "https://example.com/cold_flu.jpg"
        },
        {
            id: 6,
            question: "What are the main types of stress and their effects on health?",
            answers: [
                "Acute stress, chronic stress, and traumatic stress can have negative impacts on both physical and mental health.",
                "Stress has no impact on health; it is solely a psychological state."
            ],
            imageUrl: "https://example.com/stress_types.jpg"
        },
        {
            id: 7,
            question: "What is the difference between a food allergy and a food intolerance?",
            answers: [
                "Food allergy: Involves an immune system response to specific food proteins.",
                "Food intolerance: Does not involve an immune system response but can cause digestive discomfort."
            ],
            imageUrl: "https://example.com/food_allergy_intolerance.jpg"
        },
        {
            id: 8,
            question: "What are the main benefits of regular physical activity?",
            answers: [
                "Improved cardiovascular health, increased strength and flexibility, better mood and mental well-being.",
                "Physical activity has no specific benefits; it is all the same."
            ],
            imageUrl: "https://example.com/physical_activity.jpg"
        },
        {
            id: 9,
            question: "What is the difference between a virus and a bacteria?",
            answers: [
                "Virus: Non-living infectious agent that requires a host to replicate.",
                "Bacteria: Single-celled living organisms that can reproduce on their own."
            ],
            imageUrl: "https://example.com/virus_bacteria.jpg"
        },
        {
            id: 10,
            question: "What are the main risk factors for developing type 2 diabetes?",
            answers: [
                "Obesity, sedentary lifestyle, unhealthy diet, family history of diabetes.",
                "There are no specific risk factors for developing type 2 diabetes; it can occur randomly."
            ],
            imageUrl: "https://example.com/type2_diabetes.jpg"
        },
        {
            id: 11,
            question: "What is the difference between a sprain and a strain?",
            answers: [
                "Sprain: Injury to a ligament caused by overstretching or tearing.",
                "Strain: Injury to a muscle or tendon caused by overuse or sudden force."
            ],
            imageUrl: "https://example.com/sprain_strain.jpg"
        },
        {
            id: 12,
            question: "What are the main signs and symptoms of depression?",
            answers: [
                "Persistent sadness, loss of interest, changes in appetite and sleep patterns, feelings of guilt or worthlessness.",
                "There are no specific signs and symptoms of depression; they vary from person to person."
            ],
            imageUrl: "https://example.com/depression.jpg"
        },
        {
            id: 13,
            question: "What is the difference between a vaccine and an antibiotic?",
            answers: [
                "Vaccine: Prevents specific infections by stimulating the immune system to produce an immune response.",
                "Antibiotic: Treats bacterial infections by killing or inhibiting the growth of bacteria."
            ],
            imageUrl: "https://example.com/vaccine_antibiotic.jpg"
        },
        {
            id: 14,
            question: "What are the main benefits of getting enough sleep?",
            answers: [
                "Improved cognitive function, enhanced mood, better immune function, and lower risk of chronic diseases.",
                "Sleep has no specific benefits; it is all the same."
            ],
            imageUrl: "https://example.com/sleep_benefits.jpg"
        },
        {
            id: 15,
            question: "What is the difference between a benign tumor and a malignant tumor?",
            answers: [
                "Benign tumor: Non-cancerous growth that does not invade nearby tissues or spread to other parts of the body.",
                "Malignant tumor: Cancerous growth that can invade nearby tissues and spread to other parts of the body."
            ],
            imageUrl: "https://example.com/benign_malignant.jpg"
        },
        {
            id: 16,
            question: "What are the main components of the immune system?",
            answers: [
                "White blood cells, antibodies, lymphatic system, and spleen.",
                "The immune system does not have any specific components; it is all the same."
            ],
            imageUrl: "https://example.com/immune_system.jpg"
        },
        {
            id: 17,
            question: "What is the difference between a concussion and a contusion?",
            answers: [
                "Concussion: A mild traumatic brain injury caused by a blow or jolt to the head.",
                "Contusion: A bruise or injury to a specific body part caused by blunt force trauma."
            ],
            imageUrl: "https://example.com/concussion_contusion.jpg"
        },
        {
            id: 18,
            question: "What are the main causes and risk factors for developing cardiovascular disease?",
            answers: [
                "Causes: High blood pressure, high cholesterol, smoking, obesity, sedentary lifestyle.",
                "There are no specific causes or risk factors for developing cardiovascular disease; it can occur randomly."
            ],
            imageUrl: "https://example.com/cardiovascular_disease.jpg"
        },
        {
            id: 19,
            question: "What is the difference between a psychiatrist and a psychologist?",
            answers: [
                "Psychiatrist: Medical doctor specializing in mental health and can prescribe medications.",
                "Psychologist: Mental health professional who provides therapy and counseling but cannot prescribe medications."
            ],
            imageUrl: "https://example.com/psychiatrist_psychologist.jpg"
        },
        {
            id: 20,
            question: "What are the main factors that contribute to maintaining a healthy weight?",
            answers: [
                "Balanced diet, regular physical activity, portion control, and a healthy lifestyle.",
                "There are no specific factors for maintaining a healthy weight; it is all the same."
            ],
            imageUrl: "https://example.com/healthy_weight.jpg"
        }
        // Add more complex health questions with two answers and image URLs here...
    ],
    movies: [
        {
            id: 1,
            question: "Which Bollywood movie received the highest-grossing opening weekend of all time in India?",
            answers: [
                "War",
                "Dilwale"
            ],
            imageUrl: "https://example.com/war.jpg"
        },
        {
            id: 2,
            question: "Which Marvel movie introduced the character of Black Panther?",
            answers: [
                "Captain America: Civil War",
                "Iron Man 3"
            ],
            imageUrl: "https://example.com/civil_war.jpg"
        },
        {
            id: 3,
            question: "Which Bollywood movie is a biographical sports drama based on the life of a cricket player?",
            answers: [
                "MS Dhoni: The Untold Story",
                "Dangal"
            ],
            imageUrl: "https://example.com/ms_dhoni.jpg"
        },
        {
            id: 4,
            question: "Which Marvel movie features the Infinity Gauntlet and the Mad Titan, Thanos?",
            answers: [
                "Avengers: Infinity War",
                "Thor: Ragnarok"
            ],
            imageUrl: "https://example.com/infinity_war.jpg"
        },
        {
            id: 5,
            question: "Which Bollywood movie is a romantic drama set against the backdrop of the 1947 partition of India?",
            answers: [
                "Veere Di Wedding",
                "Kalank"
            ],
            imageUrl: "https://example.com/kalank.jpg"
        },
        {
            id: 6,
            question: "Which Marvel movie is the highest-grossing film of all time?",
            answers: [
                "Avengers: Endgame",
                "Black Panther"
            ],
            imageUrl: "https://example.com/endgame.jpg"
        },
        {
            id: 7,
            question: "Which Bollywood movie explores the theme of women empowerment in rural India?",
            answers: [
                "Pink",
                "Simmba"
            ],
            imageUrl: "https://example.com/pink.jpg"
        },
        {
            id: 8,
            question: "Which Marvel movie features the superhero team known as the Guardians of the Galaxy?",
            answers: [
                "Guardians of the Galaxy",
                "Ant-Man"
            ],
            imageUrl: "https://example.com/guardians.jpg"
        },
        {
            id: 9,
            question: "Which Bollywood movie is a historical drama based on the life of a queen?",
            answers: [
                "Padmaavat",
                "Dil Dhadakne Do"
            ],
            imageUrl: "https://example.com/padmaavat.jpg"
        },
        {
            id: 10,
            question: "Which Marvel movie introduced the character of Spider-Man in the Marvel Cinematic Universe?",
            answers: [
                "Captain America: Civil War",
                "Spider-Man: Homecoming"
            ],
            imageUrl: "https://example.com/civil_war.jpg"
        },
        {
            id: 11,
            question: "Which Bollywood movie is a romantic comedy-drama about a young couple in a live-in relationship?",
            answers: [
                "Shubh Mangal Zyada Saavdhan",
                "Kabir Singh"
            ],
            imageUrl: "https://example.com/shubh_mangal.jpg"
        },
        {
            id: 12,
            question: "Which Marvel movie features the superhero team known as the X-Men?",
            answers: [
                "X-Men: Days of Future Past",
                "Captain Marvel"
            ],
            imageUrl: "https://example.com/xmen.jpg"
        },
        {
            id: 13,
            question: "Which Bollywood movie is a comedy-drama that addresses the issue of open defecation in rural India?",
            answers: [
                "Toilet: Ek Prem Katha",
                "Kesari"
            ],
            imageUrl: "https://example.com/toilet_ek_prem_katha.jpg"
        },
        {
            id: 14,
            question: "Which Marvel movie features the superhero team known as the Avengers?",
            answers: [
                "Avengers: Age of Ultron",
                "Doctor Strange"
            ],
            imageUrl: "https://example.com/avengers.jpg"
        },
        {
            id: 15,
            question: "Which Bollywood movie is a crime thriller about a mysterious murder case?",
            answers: [
                "Andhadhun",
                "Gully Boy"
            ],
            imageUrl: "https://example.com/andhadhun.jpg"
        },
        {
            id: 16,
            question: "Which Marvel movie introduced the character of Captain Marvel?",
            answers: [
                "Captain Marvel",
                "Avengers: Endgame"
            ],
            imageUrl: "https://example.com/captain_marvel.jpg"
        },
        {
            id: 17,
            question: "Which Bollywood movie is a romantic drama about a couple dealing with the challenges of a long-distance relationship?",
            answers: [
                "Lootera",
                "Kabhi Khushi Kabhie Gham"
            ],
            imageUrl: "https://example.com/lootera.jpg"
        },
        {
            id: 18,
            question: "Which Marvel movie features the superhero known as Black Widow?",
            answers: [
                "Iron Man 2",
                "Black Widow"
            ],
            imageUrl: "https://example.com/black_widow.jpg"
        },
        {
            id: 19,
            question: "Which Bollywood movie is a coming-of-age story about a young girl pursuing her dream of becoming a wrestler?",
            answers: [
                "Dangal",
                "Sultan"
            ],
            imageUrl: "https://example.com/dangal.jpg"
        },
        {
            id: 20,
            question: "Which Marvel movie features the superhero known as Thor?",
            answers: [
                "Thor: Ragnarok",
                "Captain America: The Winter Soldier"
            ],
            imageUrl: "https://example.com/thor_ragnarok.jpg"
        }
        // Add more complex questions about Bollywood movies and Marvel with two answers and image URLs here...
    ],
    technology: [
        {
            id: 1,
            question: "What is the difference between artificial intelligence and machine learning?",
            answers: [
                "Artificial intelligence: The ability of a machine to simulate human intelligence.",
                "Machine learning: A subset of artificial intelligence that allows machines to learn and improve from experience."
            ],
            imageUrl: "https://example.com/ai_ml.jpg"
        },
        {
            id: 2,
            question: "What are the main components of a computer's central processing unit (CPU)?",
            answers: [
                "Control unit, arithmetic logic unit (ALU), and registers.",
                "There are no specific components in a CPU; it is all the same."
            ],
            imageUrl: "https://example.com/cpu.jpg"
        },
        {
            id: 3,
            question: "What is the difference between virtual reality (VR) and augmented reality (AR)?",
            answers: [
                "Virtual reality: Immersive experience that replaces the real world with a simulated environment.",
                "Augmented reality: Overlaying digital content onto the real world, enhancing the user's perception."
            ],
            imageUrl: "https://example.com/vr_ar.jpg"
        },
        {
            id: 4,
            question: "What are the main differences between 4G and 5G networks?",
            answers: [
                "4G: Provides faster internet speeds compared to previous generations.",
                "5G: Offers significantly faster speeds, lower latency, and supports more connected devices."
            ],
            imageUrl: "https://example.com/4g_5g.jpg"
        },
        {
            id: 5,
            question: "What is the difference between a software developer and a web developer?",
            answers: [
                "Software developer: Creates applications for various platforms, including desktop and mobile.",
                "Web developer: Specializes in developing websites and web applications."
            ],
            imageUrl: "https://example.com/developer.jpg"
        },
        {
            id: 6,
            question: "What are the main differences between HTTP and HTTPS?",
            answers: [
                "HTTP: Hypertext Transfer Protocol, sends data over the internet in plain text.",
                "HTTPS: Hypertext Transfer Protocol Secure, encrypts data for secure communication."
            ],
            imageUrl: "https://example.com/http_https.jpg"
        },
        {
            id: 7,
            question: "What is the difference between a hard disk drive (HDD) and a solid-state drive (SSD)?",
            answers: [
                "HDD: Uses rotating disks to store and retrieve data.",
                "SSD: Uses flash memory to store and retrieve data, resulting in faster access speeds."
            ],
            imageUrl: "https://example.com/hdd_ssd.jpg"
        },
        {
            id: 8,
            question: "What are the main differences between a virus and malware?",
            answers: [
                "Virus: A specific type of malware that self-replicates and infects files or programs.",
                "Malware: A broader term encompassing various malicious software, including viruses, spyware, and ransomware."
            ],
            imageUrl: "https://example.com/virus_malware.jpg"
        },
        {
            id: 9,
            question: "What is the difference between front-end development and back-end development?",
            answers: [
                "Front-end development: Focuses on creating the user interface and client-side functionality.",
                "Back-end development: Involves server-side programming and database management."
            ],
            imageUrl: "https://example.com/frontend_backend.jpg"
        },
        {
            id: 10,
            question: "What are the main differences between Wi-Fi and Ethernet?",
            answers: [
                "Wi-Fi: Wireless networking technology that allows devices to connect to a network without cables.",
                "Ethernet: Wired networking technology that uses physical cables to connect devices to a network."
            ],
            imageUrl: "https://example.com/wifi_ethernet.jpg"
        },
        {
            id: 11,
            question: "What is the difference between open-source software and closed-source software?",
            answers: [
                "Open-source software: Source code is freely available and can be modified by users.",
                "Closed-source software: Source code is not publicly available, and modifications are restricted."
            ],
            imageUrl: "https://example.com/opensource_closedsource.jpg"
        },
        {
            id: 12,
            question: "What are the main differences between a mobile app and a web app?",
            answers: [
                "Mobile app: Specifically designed for mobile devices and installed on the device itself.",
                "Web app: Accessed through a web browser and does not require installation."
            ],
            imageUrl: "https://example.com/mobile_web_app.jpg"
        },
        {
            id: 13,
            question: "What is the difference between a firewall and antivirus software?",
            answers: [
                "Firewall: Acts as a barrier to block unauthorized access to a network.",
                "Antivirus software: Detects and removes malicious software from a computer."
            ],
            imageUrl: "https://example.com/firewall_antivirus.jpg"
        },
        {
            id: 14,
            question: "What are the main differences between a website and a web portal?",
            answers: [
                "Website: A collection of related web pages accessible through a single domain.",
                "Web portal: A website that serves as a gateway to various resources, services, and information."
            ],
            imageUrl: "https://example.com/website_webportal.jpg"
        },
        {
            id: 15,
            question: "What is the difference between a router and a modem?",
            answers: [
                "Router: Connects multiple devices to a network and directs traffic between them.",
                "Modem: Converts signals from the internet service provider into a format that can be used by the network."
            ],
            imageUrl: "https://example.com/router_modem.jpg"
        },
        {
            id: 16,
            question: "What are the main differences between a JPEG and PNG image?",
            answers: [
                "JPEG: Compressed image format suitable for photographs and complex images.",
                "PNG: Lossless image format that supports transparency and is best for graphics and illustrations."
            ],
            imageUrl: "https://example.com/jpeg_png.jpg"
        },
        {
            id: 17,
            question: "What is the difference between a web browser and a search engine?",
            answers: [
                "Web browser: Software application used to access and view websites.",
                "Search engine: Online service that allows users to search for information on the internet."
            ],
            imageUrl: "https://example.com/browser_searchengine.jpg"
        },
        {
            id: 18,
            question: "What are the main differences between a domain name and web hosting?",
            answers: [
                "Domain name: The address that users type into a browser to access a website.",
                "Web hosting: The service that stores website files and makes them accessible on the internet."
            ],
            imageUrl: "https://example.com/domain_webhosting.jpg"
        },
        {
            id: 19,
            question: "What is the difference between a server and a client in a network?",
            answers: [
                "Server: A computer or system that provides services or resources to other computers or clients.",
                "Client: A computer or system that requests and uses services or resources from a server."
            ],
            imageUrl: "https://example.com/server_client.jpg"
        },
        {
            id: 20,
            question: "What are the main differences between a smartwatch and a fitness tracker?",
            answers: [
                "Smartwatch: Offers additional features like notifications, apps, and advanced connectivity.",
                "Fitness tracker: Primarily focuses on tracking health and fitness-related metrics."
            ],
            imageUrl: "https://example.com/smartwatch_fitness.jpg"
        }
        // Add more complex technology questions with two answers and image URLs here...
    ],

    education: [
        {
            id: 1,
            question: "What is the difference between primary education and secondary education in India?",
            answers: [
                "Primary education: Education provided in grades 1-5, focusing on foundational knowledge and skills.",
                "Secondary education: Education provided in grades 6-12, building on the foundation laid in primary education."
            ],
            imageUrl: "https://example.com/primary_secondary_education.jpg"
        },
        {
            id: 2,
            question: "What are the main differences between traditional education and online education?",
            answers: [
                "Traditional education: Classroom-based learning with face-to-face interaction between teachers and students.",
                "Online education: Learning conducted through digital platforms, allowing for remote access and flexible scheduling."
            ],
            imageUrl: "https://example.com/traditional_online_education.jpg"
        },
        {
            id: 3,
            question: "What is the difference between a government school and a private school in India?",
            answers: [
                "Government school: Funded and managed by the government, offering education at a nominal fee or free of charge.",
                "Private school: Privately funded and managed, often charging higher fees for quality education."
            ],
            imageUrl: "https://example.com/government_private_school.jpg"
        },
        {
            id: 4,
            question: "What are the main components of the National Education Policy (NEP) in India?",
            answers: [
                "Holistic and multidisciplinary education, flexible curriculum, focus on skill development and research.",
                "There are no specific components in the NEP; it is all the same as before."
            ],
            imageUrl: "https://example.com/national_education_policy.jpg"
        },
        {
            id: 5,
            question: "What is the difference between a diploma and a degree in Indian education?",
            answers: [
                "Diploma: A shorter-term qualification that focuses on specific skills and knowledge.",
                "Degree: A higher-level qualification awarded by universities, requiring a more comprehensive study."
            ],
            imageUrl: "https://example.com/diploma_degree.jpg"
        },
        {
            id: 6,
            question: "What are the main challenges faced by the Indian education system?",
            answers: [
                "Lack of quality infrastructure, inadequate teacher training, and low student-teacher ratio.",
                "There are no specific challenges in the Indian education system; it is all functioning well."
            ],
            imageUrl: "https://example.com/education_challenges.jpg"
        },
        {
            id: 7,
            question: "What is the difference between vocational education and academic education in India?",
            answers: [
                "Vocational education: Focuses on providing specific skills and training for specific occupations.",
                "Academic education: Emphasizes theoretical knowledge and intellectual development."
            ],
            imageUrl: "https://example.com/vocational_academic_education.jpg"
        },
        {
            id: 8,
            question: "What are the main differences between a university and a college in India?",
            answers: [
                "University: Offers a wide range of courses and programs, including undergraduate and postgraduate degrees.",
                "College: Provides specialized education in a specific field or discipline, usually at the undergraduate level."
            ],
            imageUrl: "https://example.com/university_college.jpg"
        },
        {
            id: 9,
            question: "What is the difference between the Central Board of Secondary Education (CBSE) and the Indian Certificate of Secondary Education (ICSE)?",
            answers: [
                "CBSE: National board of education that follows a centralized curriculum and conducts standardized exams.",
                "ICSE: Examination board that focuses on comprehensive education and emphasizes in-depth understanding."
            ],
            imageUrl: "https://example.com/cbse_icse.jpg"
        },
        {
            id: 10,
            question: "What are the main differences between a scholarship and a fellowship in Indian education?",
            answers: [
                "Scholarship: Financial aid awarded to students based on academic merit or specific criteria.",
                "Fellowship: Financial support provided to individuals pursuing advanced research or professional development."
            ],
            imageUrl: "https://example.com/scholarship_fellowship.jpg"
        },
        {
            id: 11,
            question: "What is the difference between a central university and a state university in India?",
            answers: [
                "Central university: Established by the central government and funded by the central agencies.",
                "State university: Established and funded by the state government of a particular state."
            ],
            imageUrl: "https://example.com/central_state_university.jpg"
        },
        {
            id: 12,
            question: "What are the main differences between the National Eligibility cum Entrance Test (NEET) and the Joint Entrance Examination (JEE)?",
            answers: [
                "NEET: Entrance exam for undergraduate medical and dental programs.",
                "JEE: Entrance exam for undergraduate engineering programs."
            ],
            imageUrl: "https://example.com/neet_jee.jpg"
        },
        {
            id: 13,
            question: "What is the difference between a teaching degree and a Bachelor of Education (B.Ed) degree in India?",
            answers: [
                "Teaching degree: Focuses on the acquisition of teaching skills and pedagogy.",
                "B.Ed degree: A professional degree that enables individuals to become qualified teachers."
            ],
            imageUrl: "https://example.com/teaching_b.ed.jpg"
        },
        {
            id: 14,
            question: "What are the main differences between a residential school and a day school in India?",
            answers: [
                "Residential school: Provides boarding facilities for students, who live on campus.",
                "Day school: Students attend classes during the day and return home in the evenings."
            ],
            imageUrl: "https://example.com/residential_day_school.jpg"
        },
        {
            id: 15,
            question: "What is the difference between the National Council of Educational Research and Training (NCERT) and state education boards in India?",
            answers: [
                "NCERT: An autonomous organization responsible for developing national curriculum and educational resources.",
                "State education boards: Bodies that govern and regulate education at the state level."
            ],
            imageUrl: "https://example.com/ncert_education_board.jpg"
        },
        {
            id: 16,
            question: "What are the main differences between the Graduate Aptitude Test in Engineering (GATE) and the Common Admission Test (CAT)?",
            answers: [
                "GATE: Entrance exam for admission to postgraduate engineering programs and for recruitment in public sector companies.",
                "CAT: Entrance exam for admission to postgraduate management programs, such as MBA."
            ],
            imageUrl: "https://example.com/gate_cat.jpg"
        },
        {
            id: 17,
            question: "What is the difference between a government-aided school and a private school in India?",
            answers: [
                "Government-aided school: Receives financial support from the government but has more administrative autonomy than government schools.",
                "Private school: Funded and managed by private entities, often charging higher fees forquality education."
            ],
            imageUrl: "https://example.com/govt_aided_private_school.jpg"
        },
        {
            id: 18,
            question: "What are the main differences between the All India Institute of Medical Sciences (AIIMS) and the Indian Institutes of Technology (IITs)?",
            answers: [
                "AIIMS: Premier medical institutes offering undergraduate and postgraduate medical education.",
                "IITs: Prestigious institutes offering undergraduate and postgraduate education in engineering and technology."
            ],
            imageUrl: "https://example.com/aiims_iit.jpg"
        },
        {
            id: 19,
            question: "What is the difference between a diploma course and a certificate course in Indian education?",
            answers: [
                "Diploma course: Longer duration program that provides in-depth knowledge and practical skills.",
                "Certificate course: Shorter duration program that focuses on specific skills and knowledge."
            ],
            imageUrl: "https://example.com/diploma_certificate_course.jpg"
        },
        {
            id: 20,
            question: "What are the main differences between a central school and a Kendriya Vidyalaya in India?",
            answers: [
                "Central school: Schools established by various central government agencies for children of their employees.",
                "Kendriya Vidyalaya: A system of central schools under the Ministry of Education, Government of India."
            ],
            imageUrl: "https://example.com/central_school_kendriya_vidyalaya.jpg"
        }
        // Add more complex questions about Indian education with two answers and image URLs here...
    ]

};

export default questions