import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const poems = [
  {
    id: 1,
    title: 'Я помню чудное мгновенье',
    year: '1825',
    dedication: 'Анне Керн',
    text: `Я помню чудное мгновенье:
Передо мной явилась ты,
Как мимолетное виденье,
Как гений чистой красоты.

В томленьях грусти безнадежной,
В тревогах шумной суеты,
Звучал мне долго голос нежный
И снились милые черты.

Шли годы. Бурь порыв мятежный
Рассеял прежние мечты,
И я забыл твой голос нежный,
Твои небесные черты.

В глуши, во мраке заточенья
Тянулись тихо дни мои
Без божества, без вдохновенья,
Без слез, без жизни, без любви.

Душе настало пробужденье:
И вот опять явилась ты,
Как мимолетное виденье,
Как гений чистой красоты.

И сердце бьется в упоенье,
И для него воскресли вновь
И божество, и вдохновенье,
И жизнь, и слезы, и любовь.`
  },
  {
    id: 2,
    title: 'Я вас любил',
    year: '1829',
    dedication: 'Анне Олениной',
    text: `Я вас любил: любовь еще, быть может,
В душе моей угасла не совсем;
Но пусть она вас больше не тревожит;
Я не хочу печалить вас ничем.

Я вас любил безмолвно, безнадежно,
То робостью, то ревностью томим;
Я вас любил так искренно, так нежно,
Как дай вам бог любимой быть другим.`
  },
  {
    id: 3,
    title: 'Мадонна',
    year: '1830',
    dedication: 'Наталье Гончаровой',
    text: `Не множеством картин старинных мастеров
Украсить я всегда желал свою обитель,
Чтоб суеверно им дивился посетитель,
Внимая важному сужденью знатоков.

В простом углу моем, средь медленных трудов,
Одной картины я желал быть вечно зритель,
Одной: чтоб на меня с холста, как с облаков,
Пречистая и наш божественный спаситель —

Она с величием, он с разумом в очах —
Взирали, кроткие, во славе и в лучах,
Одни, без ангелов, под пальмою Сиона.

Исполнились мои желания. Творец
Тебя мне ниспослал, тебя, моя Мадонна,
Чистейшей прелести чистейший образец.`
  }
];

const muses = [
  {
    name: 'Анна Керн',
    years: '1800-1879',
    description: 'Именно Анне Керн посвящено знаменитое стихотворение "Я помню чудное мгновенье". Их встреча в 1819 году в Петербурге, а затем новая встреча в 1825 году в Тригорском вдохновили поэта на создание одного из лучших образцов русской любовной лирики.',
    image: 'https://cdn.poehali.dev/files/633e1335-d57d-4f3b-bc41-6a58de401481.jpg'
  },
  {
    name: 'Наталья Гончарова',
    years: '1812-1863',
    description: 'Жена Пушкина, "чистейшей прелести чистейший образец". Ей посвящены стихотворения "Мадонна" и многие другие произведения. Пушкин познакомился с ней в 1828 году, а в 1831 году они поженились.',
    image: 'https://cdn.poehali.dev/files/34a41be2-0b52-4ed4-89f7-71073507363e.png'
  },
  {
    name: 'Анна Оленина',
    years: '1808-1888',
    description: 'Предполагаемая адресат стихотворения "Я вас любил". Дочь президента Академии художеств, образованная и талантливая девушка. Пушкин сватался к ней в 1828 году, но получил отказ.',
    image: 'https://cdn.poehali.dev/files/3e7c8e21-fc9a-4662-8efe-eabfded34650.jpg'
  }
];

export default function Index() {
  const [selectedPoem, setSelectedPoem] = useState(poems[0]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/30 to-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center py-12 animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <Icon name="Feather" className="text-primary mr-3" size={40} />
            <h1 className="text-5xl md:text-7xl font-bold text-primary">
              Любовная лирика Пушкина
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            "И сердце бьется в упоенье, и для него воскресли вновь и божество, и вдохновенье..."
          </p>
        </header>

        <Tabs defaultValue="poems" className="w-full mt-12">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="poems" className="text-lg">
              <Icon name="BookOpen" className="mr-2" size={20} />
              Стихотворения
            </TabsTrigger>
            <TabsTrigger value="muses" className="text-lg">
              <Icon name="Heart" className="mr-2" size={20} />
              Музы поэта
            </TabsTrigger>
          </TabsList>

          <TabsContent value="poems" className="animate-fade-in">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {poems.map((poem) => (
                <Card
                  key={poem.id}
                  className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                    selectedPoem.id === poem.id
                      ? 'bg-primary/10 border-primary border-2'
                      : 'bg-card hover:bg-secondary/50'
                  }`}
                  onClick={() => setSelectedPoem(poem)}
                >
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {poem.title}
                  </h3>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Icon name="Calendar" size={16} className="mr-2" />
                    {poem.year}
                  </div>
                  <div className="flex items-center text-sm text-accent">
                    <Icon name="User" size={16} className="mr-2" />
                    {poem.dedication}
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-8 md:p-12 bg-card/80 backdrop-blur-sm animate-scale-in">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                  {selectedPoem.title}
                </h2>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">{selectedPoem.year}</p>
                  <p className="text-sm text-accent italic">{selectedPoem.dedication}</p>
                </div>
              </div>
              <Separator className="mb-8 bg-primary/20" />
              <div className="text-lg md:text-xl leading-relaxed whitespace-pre-line text-foreground/90 font-serif">
                {selectedPoem.text}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="muses" className="animate-fade-in">
            <div className="grid gap-8">
              {muses.map((muse, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-card/80 backdrop-blur-sm"
                >
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-1">
                      <img
                        src={muse.image}
                        alt={muse.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:col-span-2 p-6 md:p-8">
                      <div className="flex items-center mb-4">
                        <Icon name="Heart" className="text-primary mr-3" size={28} />
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-primary">
                            {muse.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">{muse.years}</p>
                        </div>
                      </div>
                      <p className="text-lg leading-relaxed text-foreground/90">
                        {muse.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <footer className="mt-16 py-8 text-center border-t border-border">
          <div className="flex items-center justify-center mb-4">
            <Icon name="Feather" className="text-primary/60 mr-2" size={24} />
            <p className="text-sm text-muted-foreground">
              "Любви все возрасты покорны, ее порывы благотворны..."
            </p>
          </div>
          <p className="text-xs text-muted-foreground">
            Литературный портал, посвященный любовной лирике А.С. Пушкина
          </p>
        </footer>
      </div>
    </div>
  );
}
