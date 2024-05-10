import 'package:flutter/material.dart';
import 'package:jayateertha/utils/api.dart';
import 'package:jayateertha/widgets/custom_drawer.dart';
import 'package:velocity_x/velocity_x.dart';

class Blogs extends StatefulWidget {
  const Blogs({super.key});

  @override
  _BlogsState createState() => _BlogsState();
}

class _BlogsState extends State<Blogs> {
  bool showMediumBlogs = false;
  dynamic medium_blogs;

  @override
  void initState() {
    getMediumBlogs().then((value) {
      setState(() {
        medium_blogs = value;
        showMediumBlogs = true;
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
      body: VStack(
        [
          Container(
            height: context.percentHeight * 0.95,
          ),
          'Blogs'.text.uppercase.bold.xl4.makeCentered(),
          const Divider(),
          showMediumBlogs ? MediumBlogs(medium_blogs) : Container(),
        ],
        //alignment: MainAxisAlignment.center,
        crossAlignment: CrossAxisAlignment.center,
        alignment: MainAxisAlignment.center,
      ),
    );
  }
}

class MediumBlogs extends StatefulWidget {
  final List<dynamic> medium_blogs;
  const MediumBlogs(this.medium_blogs, {super.key});

  @override
  _MediumBlogsState createState() => _MediumBlogsState();
}

class _MediumBlogsState extends State<MediumBlogs> {
  final ScrollController _scrollController =
      ScrollController(initialScrollOffset: 0);
  @override
  Widget build(BuildContext context) {
    List<dynamic> data = widget.medium_blogs;
    int length = data.length;
    for (int i = 0; i < length; i++) {
      // data[i]["description"] = data[6]["description"];
      if (data[i]["title"] == null) {
        data[i]["title"] = "No title available";
      }
      // print(i.toString() + " " + data[i]["title"]);
    }
    return widget.medium_blogs.isNotEmpty
        ? Expanded(
            child: Scrollbar(
              controller: _scrollController,
              thumbVisibility: true,
              child: Container(
                margin: const EdgeInsets.all(30),
                width: context.percentWidth * 70,
                child: ListView.builder(
                    controller: _scrollController,
                    itemCount: length,
                    scrollDirection: Axis.vertical,
                    //pauseAutoPlayOnTouch: Duration(seconds: 5),
                    itemBuilder: (context, index) {
                      String title = "";
                      String description = "";
                      if (data[index] == null) {
                        //print("[*] NULL");
                      }
                      title = data[index]["title"].toString() != null
                          ? data[index]["name"].toString()
                          : "";
                      return data[index] != null
                          ? Material(
                              child: SizedBox(
                                //width: context.percentWidth * 40,
                                height: context.percentHeight * 25,
                                child: InkWell(
                                    hoverColor: Colors.lightBlue,
                                    borderRadius: BorderRadius.circular(8),
                                    onTap: () {
                                      if (data[index]["link"].toString() !=
                                              null ||
                                          data[index]["link"].toString() !=
                                              "") {
                                        launch_url_newtab(
                                            data[index]["link"].toString());
                                      }
                                    },
                                    //hoverColor: Colors.green,
                                    child: Container(
                                      // elevation: 20,
                                      color: Vx.randomColor,
                                      padding: const EdgeInsets.all(20),
                                      child: data[index]["title"]
                                          .toString()
                                          .text
                                          .uppercase
                                          .underline
                                          .bold
                                          .xl
                                          .makeCentered(),
                                    ).card.elevation(20).make()),
                              ),
                            )
                          : Container();
                    }),
              ),
            ),
          )
        : Expanded(
            //height: context.percentHeight * 35.5,
            child: Center(
              child: "Loading...".text.blue100.makeCentered(),
            ),
          );
  }
}
