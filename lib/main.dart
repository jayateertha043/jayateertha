import 'package:animated_text_kit/animated_text_kit.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:jayateertha/pages/blogs.dart';
import 'package:jayateertha/pages/portfolio.dart';
//import 'package:jayateertha/utils/api.dart';
import 'package:jayateertha/widgets/custom_drawer.dart';

import 'package:velocity_x/velocity_x.dart';
//import 'package:url_strategy/url_strategy.dart';
//import 'dart:html';

void main() {
  //setPathUrlStrategy();
  runApp(const MyApp());
}

const colorizeColors = [
  Colors.white,
  Colors.redAccent,
  Colors.blue,
  Colors.green,
  Colors.pink,
  Colors.purple,
  Colors.deepOrange,
  Colors.yellow
];
const colorizeTextStyle = TextStyle(
  fontWeight: FontWeight.bold,
  fontSize: 50.0,
  fontFamily: '',
);

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Jayateertha G',
      themeMode: ThemeMode.dark,
      theme: ThemeData(
          brightness: Brightness.dark,
          textTheme: GoogleFonts.latoTextTheme(
            ThemeData(brightness: Brightness.dark).textTheme,
          )),
      initialRoute: '/',
      routes: {
        '/': (context) => const MyHomePage(),
        '/portfolio': (context) => const Portfolio(),
        '/blogs': (context) => const Blogs()
      },
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({Key? key}) : super(key: key);

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: Builder(builder: (context) {
          return IconButton(
              onPressed: () {
                showCustomDrawer(context);
              },
              icon: const Icon(Icons.menu_sharp));
        }),
      ),
      body: Center(
        child: VStack(
          [
            Image.asset("assets/img/avatar.jpg")
                .card
                .circular
                .make()
                .wh20(context)
                .centered(),
            welcome.richText.bold.xl2.makeCentered(),
            const SizedBox(
              height: 10,
            ),
            'I am'.text.xl2.makeCentered(),
            Container(
              height: 10,
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                AnimatedTextKit(
                  pause: const Duration(microseconds: 0),
                  isRepeatingAnimation: true,
                  repeatForever: true,
                  animatedTexts: [
                    ColorizeAnimatedText(
                      'Jayateertha G',
                      textStyle: TextStyle(
                        fontWeight: FontWeight.bold,
                        fontSize: context.isMobile ? 35 : 50,
                        fontFamily: '',
                      ),
                      colors: colorizeColors,
                    ),
                  ],
                ),
                const Text(
                  "  ,",
                  style: colorizeTextStyle,
                ),
              ],
            ).centered(),
            const SizedBox(
              height: 20,
            ),
            SizedBox(
              height: 50,
              child: DefaultTextStyle(
                style: TextStyle(
                  fontSize: context.isMobile ? 25 : 40,
                  fontWeight: FontWeight.bold,
                  color: Colors.white,
                  fontFamily: '',
                ),
                child: AnimatedTextKit(
                  isRepeatingAnimation: true,
                  repeatForever: true,
                  animatedTexts: [
                    RotateAnimatedText(Anim_Text_1),
                    RotateAnimatedText(Anim_Text_2),
                    RotateAnimatedText(Anim_Text_3),
                  ],
                ),
              ),
            )
          ],
          alignment: MainAxisAlignment.center,
          crossAlignment: CrossAxisAlignment.center,
        ),
      ),
    );
  }
}

//

const String Anim_Text_1 = '''Security Researcher 😎''';
const String Anim_Text_2 = '''Developer 💻''';
const String Anim_Text_3 = '''Hacker 👨‍💻''';
const String welcome = '''Hi! 👋''';
