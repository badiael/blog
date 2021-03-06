import {
  AuthorCard,
  AutoScaleImage,
  Body,
  Bold,
  ExternalLink,
  Giphy,
  Gist,
  Hero,
  Italic,
  ListItem,
  Page,
  Paragraph,
  Title,
  Title2,
  Vimeo,
  UnorderedList,
  Header,
  Logo,
  Navigation,
  Link,
  NavigationItem,
  AuthorCardWrapper,
  Span,
  Footer,
  FooterInfo,
  Image,
  FooterRegister,
  Title3,
  Button,
  FooterLinks,
  Copy,
  InfoText,
} from '../components'
import br from '../elements/br'

export default {
  name: 'sketchPlugin',
  url: 'how-weve-built-a-real-time-sketch-to-code-engine-with-live-preview',
  content: Page(
    Header(
      Link(
        [
          Logo(
            '/static/blog/assets/circle.svg',
            '/static/blog/assets/square.svg',
            '/static/blog/assets/triangle.svg',
            '/static/blog/assets/logowriting.svg'
          ),
        ],
        '/'
      ),
      Navigation(
        NavigationItem([Link('Home', '/')]),
        NavigationItem([Link('Vision', '/vision')]),
        NavigationItem([Link('About Us', '/about')]),
        NavigationItem([Link('Funding', '/funding')]),
        NavigationItem([Link('Blog', '/blog')], '#4a4a4a'),
        NavigationItem([Link(Button('Sign up'), '/sign-up')])
      )
    ),
    Hero('/static/blog/criss-blog.png', 'teleportHQ Sketch plugin'),
    Body(
      AuthorCardWrapper([
        AuthorCard({
          src: '/static/blog/criss.jpeg',
          name: 'Criss Moldovan',
          twitterHandle: '@crissmoldovan',
          twitterLink: 'https://twitter.com/@crissmoldovan',
        }),
        Span('Posted on May 25'),
      ]),
      Title('Hello! we’ve built a real-time Sketch-to-code engine (with live preview)'),
      Paragraph('Hello world'),
      Paragraph('quick questions:'),
      Paragraph(Italic('Aren’t (Web / Mobile) Designers and Developers supposed to speak the same language?')),
      Paragraph(Italic('Aren’t we all in pursuit of apps / sites that look pretty and work smoothly?')),
      Paragraph(Italic('Can we make the whole mobile / web building process a bit more humane?')),
      Paragraph(
        'There’s clearly a gap between designers and developers. This seems all too familiar, and to my surprise it seems we’ve been mostly trying to navigate around it instead of facing it head on.'
      ),
      Paragraph(Giphy('https://giphy.com/embed/8acGIeFnqLA7S', '100%')),
      Title2('Can we right this wrong?'),
      Paragraph(
        'About a year back, as I was working on a mobile app, I got myself stuck in a never ending ping-pong with my designer, mainly tweaking how the app looks and behaves. Most of these changes were only about positioning, colors, spacing and so on. Instead of using my time to implement the real value bringing guts of the app, about 60% was spent doing non-business-logic relevant work aka “pixel pushing”. Essentially, all the “actions” the designer was doing in Sketch, I had to re-do in code. That, to me, looked like a completely inefficient process and the paved way to frustration. And a missed deadline. Or two :)'
      ),
      Paragraph('My first thought was “I’m probably not using the right tools… there must be a way…”'),
      Paragraph(
        'Not being a designer myself, and fairly unfamiliar with Sketch, I started to look around for some solutions that could help, but all I could find were plugins or apps that were doing part of the job. So, why bother using something that would only add more complexity to an already inefficient process'
      ),
      Title2('Hang on, so… what are we actually looking for?'),
      Paragraph('in a nutshell this is what I would like:'),
      Paragraph(
        'the designer should be able to “preview” the designs on his device / browser in realtime. But, not simulated. He should see the preview as the real deal, as if a developer would have implemented it for him.'
      ),
      Paragraph(
        'when the designer draws a button, the developer should get a “Button” code snippet ready to be used in the app / site'
      ),
      Paragraph('The developer should chose the snippet’s language and dialect or coding style.'),
      Paragraph(
        'It looks like there are some excellent tools to cover parts of the requirements, and they fall within two categories: ',
        Italic('prototyping tools'),
        ' and ',
        Italic('target specific “helpers”.')
      ),
      Paragraph(
        'While tools such as ',
        ExternalLink('InVision', 'https://invisionapp.com'),
        ' and lately ',
        ExternalLink('Sketch', 'https://sketchapp.com'),
        '’s own built in prototyping system are doing a great job for prototyping, they only go as far as “prototyping”. They are mostly approximations or simulations of the end result, and they stop being useful right there.There’s not much more you can do with your prototypes once you have built them(apart from contemplate their beauty).They cannot be re - used or further expanded toward a “real”, production ready result.Hence you now need a developer to code the UI, so back to square one.'
      ),
      Paragraph(
        'On the other hand, Target specific tools, such as ',
        ExternalLink('Zeplin', 'https://zeplin.io'),
        ', do a great deal in helping the developer “pick” styling information, but they rarely give the full context, plus they are exactly what they are called “target specific”, with hardly any configurations possible.'
      ),
      Paragraph(
        'Another worth mentioning approach has been proposed by the guys from Anima, through their Launchpad plugin for Sketch which exports plain HTML/CSS.'
      ),
      Paragraph(
        'While there are plenty of tools that’ll get you a fair bit ahead towards the goal, the designer still needs a developer to be able to experience his designs in the “native world”, plus a lot of manual tweaking is needed afterwards.'
      ),
      Paragraph('Then, the thought: '),
      Paragraph(Italic('What would it take to capture the designer’s “input” and translate it to code, in real-time?')),
      Paragraph(Giphy('https://giphy.com/embed/zL6Xl2A5R8yNG', '100%')),
      Paragraph(
        'And this was the seed thought that brought together a bunch of techies whom I met at the ',
        ExternalLink('2017 JSHeroes conference', 'https://jsheroes.io'),
        ' in Cluj, Romania.'
      ),
      Paragraph(
        'The shortest way we could imagine about how to tackle this challenge was to try to define the layout representation in a code-agnostic format from which, through a parser of some sort, we would generate the code.'
      ),
      Paragraph(
        'Given we are describing a web / mobile document’s structure, a ',
        ExternalLink('VDOM', 'https://https://github.com/Matt-Esch/virtual-dom'),
        '- like model would have been the initial choice, but somehow coupled with some concepts found in ',
        ExternalLink('AST', 'https://en.wikipedia.org/wiki/Abstract_syntax_tree'),
        '. We finally opted for a custom stripped down structure inspired by them. The JSON representation appeared to be the format of choice for the task at that time, given that: '
      ),
      Paragraph(
        UnorderedList(
          ListItem(
            Bold(Italic('type:')),
            ' a string that defines the nature of the element. Regardless if we speak about web or mobile design & development, the building blocks are roughly the same: views, texts, images, inputs, and buttons that are eventually aggregated into more complex elements. We’d go as far as to say these building blocks are here to stay even if we go into the AR / MR world, so a generic descriptive naming convention can be agreed that could be translated via a mapping to any target.'
          ),
          ListItem(
            Bold(Italic('styles:')),
            ' a ',
            ExternalLink('JSS', 'http://cssinjs.org/'),
            ' object. JSS has been chosen as it covers all web styling properties and can be translated to other formats, such as CSS, React styling objects, React Native StyleSheet objects, etc…'
          ),
          ListItem(
            Bold(Italic('children:')),
            ' an array of elements or a string (in the case of a simple label for example)'
          )
        )
      ),
      Paragraph(
        'To make all this more visual, let’s take an example. The following image shows a basic UI made of a box, that contains a label and an image:'
      ),
      AutoScaleImage({
        src: 'https://cdn-images-1.medium.com/max/2000/1*WwKvgsKDsgKT5f3zT5CYRQ.png',
        alt: 'Hello World',
      }),
      AutoScaleImage({
        src: 'https://cdn-images-1.medium.com/max/1600/1*b6YODLRx6dghlZzzO1PXpg.png',
        alt: 'Diagram',
      }),
      Paragraph(
        'We’ll publish soon more information about how they work but, for now, let’s look at how a React generated code would look like for our JSON IR:'
      ),
      Gist('49375169aee3b9f287d5e1602c84a7c0'),
      Paragraph('Alternatively, the React-Native code would look like this:'),
      Paragraph(Gist('cd01c6c3bc5a30ca59cee4652d2305a7/raw/9bfcd37d62924c5d7d65cb780e1e1138edbbfbc8/results.csv')),
      Paragraph(
        Bold('NOTE'),
        ': in this example the positioning is deliberately set to absolute for the sake of simplicity.We’ll cover this topic in a future article given the complexity of the subject.Meanwhile, you can take a look at Karl’s article about Figma to React code generation.'
      ),
      Title2('Sneak Peek'),
      Paragraph(
        'Here’s a little demo of how this all works. In the video you can see our early stage Sketch plugin in action and how the design-source > intermediary representation > code generation > live preview flow feels.'
      ),
      Paragraph('The video is a simulation of a designer’s experience building JSHeroes website’s menu.'),
      Paragraph(Vimeo('https://player.vimeo.com/video/267762392')),
      Paragraph('On the screen:'),
      UnorderedList(
        ListItem('the left side: our dashboard shows the JSON IR and generated React code, side-by-side'),
        ListItem('the top right corner: a web live previewer'),
        ListItem('the lower right: Sketch with the Teleport plugin loaded.')
      ),
      Title2('Wrap ups'),
      Paragraph(
        'So far, we confirmed there’s a viable technological path for building real-time design-to-code experiences through which the design source and the target code can be completely decoupled.'
      ),
      Paragraph('So far, we’re able to generate React, React Native, Vue, HTML/CSS and AngularJS code.'),
      Paragraph(
        'Sure, the holy grail would be a bidirectional approach, where JSON IR could be generated by interpreting the source code, hence we love Jon Gold’s approach in ',
        ExternalLink('React Sketch App', 'https://airbnb.design/painting-with-code/'),
        '.We’d highly recommend checking out the project.'
      ),
      Paragraph(
        'We also aim to open source these tools ASAP, via Github on ',
        ExternalLink('https://github.com/teleporthq', 'https://github.com/teleporthq'),
        ' so, stay tuned.'
      ),
      Paragraph(
        'We’re looking forward for your thoughts and feedback, so, please get in touch with us via ',
        ExternalLink('Twitter', 'https://twitter.com/teleporthqio'),
        '.'
      ),
      Paragraph(Giphy('https://giphy.com/embed/l3vR56JLAeTVNDJfO', '56%'))
    ),
    InfoText([
      Paragraph(
        'Our blog’s code is automatically generated from a  ',
        ExternalLink('teleport project definition', 'https://teleporthq.io/static/blog/teleport.json'),
        '. The blog is open-source and you can learn more about how the technology works from our ',
        ExternalLink('github repo', 'https://github.com/teleporthq/blog'),
        '.'
      ),
    ]),
    Footer([
      FooterInfo([
        Image({ src: '/static/blog/assets/teleporthq-footer.svg', alt: 'teleport footer' }),
        Paragraph(
          'For information regarding other co-financed projects within European Union, please visit ',
          ExternalLink('www.fonduri-ue.ro', 'http://www.fonduri-ue.ro')
        ),
        Paragraph(
          "The content of this material does not necessary represent the oficial statement of the European Union or Romania's Government."
        ),
      ]),
      FooterRegister([
        Title3('Sounds good?', 'center', '1.3em'),
        Span('Register for our Private Alpha'),
        br,
        br,
        Link(Button([Span('SIGN UP')], 'inline-block'), '/sign-up'),
      ]),
      FooterLinks([
        Title3('Links', 'center', '1.1em'),
        Link(Span('About us'), '/about'),
        Link(Span('Funding'), '/funding'),
        Link(Span('Vision'), '/vision'),
      ]),
    ]),
    Copy([Span('Evo Forge, Calea Motilor nr 84, Cluj-Napoca &nbsp;&nbsp;&nbsp;&nbsp; Phone: +40 (0)364 101 203')])
  ),
}
