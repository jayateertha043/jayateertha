import 'package:http/http.dart' as http;
import 'dart:convert';

import 'package:url_launcher/url_launcher.dart';

Future<List<dynamic>> getGithubProjects() async {
  const String apiUrl =
      'https://api.github.com/users/jayateertha043/repos?sort=created';
  Uri uri = Uri.parse(apiUrl);
  final res = await http.get(uri);
  var body = const Utf8Decoder().convert(res.bodyBytes);
  var data = json.decode(body);
  List<dynamic> filtered = [];
  if (res.statusCode == 200) {
    for (dynamic obj in data) {
      if (obj != null) {
        if (obj["fork"] != true) {
          filtered.add(obj);
        }
      }
    }
  }
  return filtered;
}

Future<dynamic> getMediumBlogs() async {
  const String apiUrl =
      'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@jayateerthag?format=json';
  Uri uri = Uri.parse(apiUrl);
  dynamic filtered = [];
  final res = await http.get(uri);
  if (res.statusCode == 200) {
    var body = const Utf8Decoder().convert(res.bodyBytes);
    var data = json.decode(body);
    filtered = data["items"];
  }

  return filtered;
}

Future<dynamic> getProjectsFromFirebase() async {
  const String apiUrl =
      'https://jayateertha-df57b-default-rtdb.firebaseio.com/.json';
  Uri uri = Uri.parse(apiUrl);
  dynamic filtered = [];
  final res = await http.get(uri);
  if (res.statusCode == 200) {
    var body = const Utf8Decoder().convert(res.bodyBytes);
    var data = json.decode(body);
    filtered = data["projects"];
  }

  return filtered;
}

Future<dynamic> getAchievementsFromFirebase() async {
  const String apiUrl =
      'https://jayateertha-df57b-default-rtdb.firebaseio.com/.json';
  Uri uri = Uri.parse(apiUrl);
  dynamic filtered = [];
  final res = await http.get(uri);
  if (res.statusCode == 200) {
    var body = const Utf8Decoder().convert(res.bodyBytes);
    var data = json.decode(body);
    filtered = data["achievements"];
  }

  return filtered;
}

void launch_url_newtab(String uri) async {
  await canLaunch(uri) ? await launch(uri) : throw 'Could not launch $uri';
}
