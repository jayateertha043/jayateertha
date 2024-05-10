import 'package:flutter/material.dart';
import 'package:jayateertha/utils/api.dart';
import 'package:jayateertha/widgets/custom_drawer.dart';
import 'package:velocity_x/velocity_x.dart';

class Portfolio extends StatefulWidget {
  const Portfolio({super.key});

  @override
  _PortfolioState createState() => _PortfolioState();
}

class _PortfolioState extends State<Portfolio> {
  bool showProjects = false;
  bool showAchievements = false;
  List<dynamic> projects = List.generate(0, (index) => null);
  List<dynamic> achievements = List.generate(0, (index) => null);

  //final ScrollController _controller = new ScrollController();
  @override
  void initState() {
    // TODO: implement initState
    getGithubProjects().then((value) {
      setState(() {
        projects.addAll(value);
        showProjects = true;
      });
      getProjectsFromFirebase().then((value) {
        setState(() {
          projects.addAll(value);
          showProjects = true;
        });
      });
      setState(() {
        projects.shuffle();
      });
      getAchievementsFromFirebase().then((value) {
        setState(() {
          achievements.addAll(value);
          projects.shuffle();
          //print(achievements);
          showAchievements = true;
        });
      });
    });

    super.initState();
  }

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
      body: Wrap(
        alignment: WrapAlignment.center,
        children: [
          Container(
            height: context.percentHeight * 0.95,
          ),
          'Achievements'.text.uppercase.bold.xl4.makeCentered(),
          const Divider(),
          // showAchievements
          SizedBox(
              height: context.percentHeight * 35.5,
              child: Achievements(achievements)),
          //  : SizedBox(height: context.percentHeight * 35.5),
          const Divider(),
          'Projects'.text.uppercase.bold.xl4.makeCentered(),
          const Divider(),
          //showProjects
          SizedBox(
              height: context.percentHeight * 35.5, child: Projects(projects)),
          //: SizedBox(height: context.percentHeight * 35.5),
        ],
        // crossAlignment: CrossAxisAlignment.center,
      ),
    );
  }
}

class Projects extends StatefulWidget {
  final List<dynamic> projects;

  const Projects(this.projects, {super.key});
  @override
  _ProjectsState createState() => _ProjectsState();
}

class _ProjectsState extends State<Projects> {
  final ScrollController _scrollController =
      ScrollController(initialScrollOffset: 0);
  _ProjectsState();
  @override
  Widget build(BuildContext context) {
    var data = widget.projects;
    int length = data.length;
    for (int i = 0; i < length; i++) {
      // data[i]["description"] = data[6]["description"];
      if (data[i]["description"] == null) {
        data[i]["description"] = "No description available";
      }
      //  print(i.toString() + " " + data[i]["name"]);
      //print(data[i]["description"]);
    }
    return widget.projects.isNotEmpty
        ? SizedBox(
            width: context.isMobile
                ? context.percentWidth * 100
                : context.percentWidth * 70,
            child: Scrollbar(
              //scrollbarOrientation: ScrollbarOrientation.bottom,
              thumbVisibility: true,
              controller: _scrollController,
              child: GridView.builder(
                  gridDelegate: SliverGridDelegateWithMaxCrossAxisExtent(
                      maxCrossAxisExtent: 200,
                      childAspectRatio:
                          context.isMobile ? (4 / 3) * 0.55 : (16 / 9) * 0.55,
                      crossAxisSpacing: 20,
                      mainAxisSpacing: 20),
                  itemCount: length,
                  // scrollDirection: Axis.horizontal,
                  controller: _scrollController,
                  shrinkWrap: true,
                  //    autoPlay: true,
                  //  viewportFraction: 0.8,
                  //aspectRatio: (4 / 3),
                  //enableInfiniteScroll: true,
                  //enlargeCenterPage: true,
                  //pauseAutoPlayOnTouch: Duration(seconds: 5),
                  itemBuilder: (context, index) {
                    String title = "";
                    String description = "";
                    if (data[index] == null) {
                      //     print("[*] NULL");
                    }
                    title = data[index]["name"].toString() ?? "";
                    description = data[index]["description"] != null
                        ? data[index]["description"].toString()
                        : "";
                    return data[index] != null
                        ? Material(
                            child: InkWell(
                              onTap: () {
                                if (data[index]["html_url"].toString() !=
                                        null ||
                                    data[index]["html_url"].toString() != "") {
                                  launch_url_newtab(data[index]["html_url"]);
                                }
                              },
                              hoverColor: Colors.green,
                              child: Padding(
                                padding: const EdgeInsets.all(3),
                                child: Card(
                                  color: Vx.randomColor,
                                  child: VStack(
                                    [
                                      Container(
                                          height: context.percentHeight * 2),
                                      title
                                          .toString()
                                          .text
                                          .uppercase
                                          .underline
                                          .bold
                                          .medium
                                          .makeCentered(),
                                      const Divider(),
                                      Text(description).px8(),
                                    ],
                                    crossAlignment: CrossAxisAlignment.center,
                                  ),
                                ),
                              ),
                            ),
                          )
                        : SizedBox(
                            height: context.percentHeight * 35.5,
                            child: Center(
                              child: "Nothing to display , come back later ..."
                                  .text
                                  .blue100
                                  .makeCentered(),
                            ),
                          );
                  }),
            ),
          )
        : SizedBox(
            height: context.percentHeight * 35.5,
            child: Center(
              child: "Loading...".text.blue100.makeCentered(),
            ),
          );
  }
}

class Achievements extends StatefulWidget {
  final List<dynamic> achievements;
  const Achievements(this.achievements, {super.key});

  @override
  _AchievementsState createState() => _AchievementsState();
}

class _AchievementsState extends State<Achievements> {
  final ScrollController _scrollController =
      ScrollController(initialScrollOffset: 0);
  @override
  Widget build(BuildContext context) {
    var data = widget.achievements;
    int length = data.length;
    //print("Printing Achievements");
    for (int i = 0; i < length; i++) {
      // data[i]["description"] = data[6]["description"];
      if (data[i]["description"] == null) {
        data[i]["description"] = "No description available";
      }
      //print(i.toString() + " " + data[i]["name"]);
      // print(data[i]["description"]);
    }
    return widget.achievements.isNotEmpty
        ? SizedBox(
            height: context.percentHeight * 35.5,
            width: context.percentWidth * 70,
            child: VxSwiper.builder(
                // gridDelegate: SliverGridDelegateWithMaxCrossAxisExtent(
                //   maxCrossAxisExtent: 200,
                // childAspectRatio: (4 / 3) * 1,
                //crossAxisSpacing: 20,
                //mainAxisSpacing: 20),
                itemCount: length,
                // scrollDirection: Axis.horizontal,
                // controller: _scrollController,
                //shrinkWrap: true,
                autoPlayInterval: const Duration(seconds: 3),
                autoPlay: true,
                viewportFraction: 0.65,
                aspectRatio: (3 / 2),
                enableInfiniteScroll: true,
                enlargeCenterPage: true,
                pauseAutoPlayOnTouch: const Duration(seconds: 5),
                autoPlayCurve: Curves.fastOutSlowIn,
                itemBuilder: (context, index) {
                  String title = "";
                  String description = "";
                  if (data[index] == null) {
                    // print("[*] NULL");
                  }
                  title = data[index]["name"].toString() ?? "";
                  description = data[index]["description"] != null
                      ? data[index]["description"].toString()
                      : "";
                  return data[index] != null
                      ? Material(
                          child: InkWell(
                            onTap: () {
                              if (data[index]["html_url"].toString() != null ||
                                  data[index]["html_url"].toString() != "") {
                                launch_url_newtab(data[index]["html_url"]);
                              }
                            },
                            hoverColor: Colors.green,
                            child: Padding(
                              padding: const EdgeInsets.all(3),
                              child: Card(
                                color: Vx.randomColor,
                                child: title
                                    .toString()
                                    .text
                                    .uppercase
                                    .underline
                                    .bold
                                    .maxFontSize(24)
                                    .makeCentered()
                                    .p4(),
                              ),
                            ),
                          ),
                        )
                      : Container();
                }),
          )
        : SizedBox(
            height: context.percentHeight * 35.5,
            child: Center(
              child: "Loading...".text.blue100.makeCentered(),
            ),
          );
  }
}
