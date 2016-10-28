# Contributing to Neo4j Console

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

The following is a set of guidelines for contributing to Neo4j Console.
These are just guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

#### Table Of Contents

[What should I know before I get started?](#what-should-i-know-before-i-get-started)
  * [Code of Conduct](#code-of-conduct)

[How Can I Contribute?](#how-can-i-contribute)
  * [Reporting Bugs](#reporting-bugs)
  * [Suggesting Enhancements](#suggesting-enhancements)
  * [Your First Code Contribution](#your-first-code-contribution)
  * [Pull Requests](#pull-requests)

[Styleguides](#styleguides)
  * [Git Commit Messages](#git-commit-messages)
  * [JavaScript Styleguide](#javascript-styleguide)
  * [Documentation Styleguide](#documentation-styleguide)

[Additional Notes](#additional-notes)
  * [Issue and Pull Request Labels](#issue-and-pull-request-labels)

## What should I know before I get started?

### Code of Conduct

This project adheres to the Contributor Covenant [code of conduct](CODE_OF_CONDUCT.md).
By participating, you are expected to uphold this code.
Please report unacceptable behavior to [itaisteinherz@gmail.com](mailto:itaisteinherz@gmail.com).

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report for Neo4j Console. Following these guidelines helps maintainers and the community understand your report :pencil:, reproduce the behavior :computer: :computer:, and find related reports :mag_right:.

Before creating bug reports, please check [this list](#before-submitting-a-bug-report) as you might find out that you don't need to create one. When you are creating a bug report, please [include as many details as possible](#how-do-i-submit-a-good-bug-report). If you'd like, you can use [this template](#template-for-submitting-bug-reports) to structure the information.

#### Before Submitting A Bug Report

* **Perform a [cursory search](https://github.com/itaisteinherz/neo4j-console/issues)** to see if the problem has already been reported. If it has, add a comment to the existing issue instead of opening a new one.

#### How Do I Submit A (Good) Bug Report?

Bugs are tracked as [GitHub issues](https://guides.github.com/features/issues/). If you have found a bug, Create an issue in the repository and provide the following information.

Explain the problem and include additional details to help maintainers reproduce the problem:

* **Use a clear and descriptive title** for the issue to identify the problem.
* **Describe the exact steps which reproduce the problem** in as many details as possible. For example, start by explaining how you started Neo4j Console, e.g. which command exactly you used in the terminal, or how you started Neo4j Console otherwise.
* **Provide specific examples to demonstrate the steps**. Include links to files or GitHub projects, or copy/pasteable snippets, which you use in those examples. If you're providing snippets in the issue, use [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
* **Explain which behavior you expected to see instead and why.**
* **Include screenshots and animated GIFs** which show you following the described steps and clearly demonstrate the problem. You can use [this tool](http://www.cockos.com/licecap/) to record GIFs on macOS and Windows, and [this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/GNOME/byzanz) on Linux.
* **If you're reporting that Neo4j Console crashed**, include a crash report with a stack trace from the operating system. If you run the project using ```npm start```, the crash report will be available at the root of the project, with the name "npm-debug.log". Include the crash report in the issue in a [code block](https://help.github.com/articles/markdown-basics/#multiple-lines), a [file attachment](https://help.github.com/articles/file-attachments-on-issues-and-pull-requests/), or put it in a [gist](https://gist.github.com/) and provide link to that gist.
* **If the problem wasn't triggered by a specific action**, describe what you were doing before the problem happened and share more information using the guidelines below.

Provide more context by answering these questions:

* **Can you reproduce the problem?**
* **Did the problem start happening recently** (e.g. after updating to a new version of Neo4j Console) or was this always a problem?
* If the problem started happening recently, **can you reproduce the problem in an older version of Neo4j Console?** What's the most recent version in which the problem doesn't happen? You can download older versions of Neo4j Console from [the releases page](https://github.com/itaisteinherz/neo4j-console/releases).
* **Can you reliably reproduce the issue?** If not, provide details about how often the problem happens and under which conditions it normally happens.
* If the problem is related to working with files (e.g. opening and editing files), **does the problem happen for all files and projects or only some?** Does the problem happen only when working with local or remote files (e.g. on network drives), with files of a specific type (e.g. only JavaScript or Markdown files), with large files or files with very long lines, or with files in a specific encoding? Is there anything else special about the files you are using?

Include details about your configuration and environment:

* **Which version of Neo4j Console are you using?** You can get the exact version by looking at the package.json file.
* **What's the name and version of the OS you're using**?
* **Are you running Neo4j Console in a virtual machine?** If so, which VM software are you using and which operating systems and versions are used for the host and the guest?
* **Are you using Neo4j Console with multiple monitors?** If so, can you reproduce the problem when you use a single monitor?
* **Which keyboard layout are you using?** Are you using a US layout or some other layout?

#### Template For Submitting Bug Reports

    [Short description of problem here]

    **Reproduction Steps:**

    1. [First Step]
    2. [Second Step]
    3. [Other Steps...]

    **Expected behavior:**

    [Describe expected behavior here]

    **Observed behavior:**

    [Describe observed behavior here]

    **Screenshots and GIFs**

    ![Screenshots and GIFs which follow reproduction steps to demonstrate the problem](url)

    **Neo4j Console version:** [Enter Neo4j Console version here]
    **OS and version:** [Enter OS name and version here]

    **Installed packages:**

    [List of installed packages here]

    **Additional information:**

    * Problem can be reproduced in safe mode: [Yes/No]
    * Problem started happening recently, didn't happen in an older version of Neo4j Console: [Yes/No]
    * Problem can be reliably reproduced, doesn't happen randomly: [Yes/No]
    * Problem happens with all files and projects, not only some files or projects: [Yes/No]

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for Neo4j Console, including completely new features and minor improvements to existing functionality. Following these guidelines helps maintainers and the community understand your suggestion :pencil: and find related suggestions :mag_right:.

Before creating enhancement suggestions, please check [this list](#before-submitting-an-enhancement-suggestion) as you might find out that you don't need to create one. When you are creating an enhancement suggestion, please [include as many details as possible](#how-do-i-submit-a-good-enhancement-suggestion). If you'd like, you can use [this template](#template-for-submitting-enhancement-suggestions) to structure the information.

#### Before Submitting An Enhancement Suggestion

* **Perform a [cursory search](https://github.com/itaisteinherz/neo4j-console/issues)** to see if the enhancement has already been suggested. If it has, add a comment to the existing issue instead of opening a new one.

#### How Do I Submit A (Good) Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues](https://guides.github.com/features/issues/). After you have thought of an enhancement, create an issue on the repository and provide the following information:

* **Use a clear and descriptive title** for the issue to identify the suggestion.
* **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
* **Provide specific examples to demonstrate the steps**. Include copy/pasteable snippets which you use in those examples, as [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the current behavior** and **explain which behavior you expected to see instead** and why.
* **Include screenshots and animated GIFs** which help you demonstrate the steps or point out the part of Neo4j Console which the suggestion is related to. You can use [this tool](http://www.cockos.com/licecap/) to record GIFs on macOS and Windows, and [this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/GNOME/byzanz) on Linux.
* **Explain why this enhancement would be useful** to most Neo4j Console users.
* **Specify which version of Neo4j Console you're using.** You can get the exact version by looking at the package.json file.
* **Specify the name and version of the OS you're using.**

#### Template For Submitting Enhancement Suggestions

    [Short description of suggestion]

    **Steps which explain the enhancement**

    1. [First Step]
    2. [Second Step]
    3. [Other Steps...]

    **Current and suggested behavior**

    [Describe current and suggested behavior here]

    **Why would the enhancement be useful to most users**

    [Explain why the enhancement would be useful to most users]

    [List some other text editors or applications where this enhancement exists]

    **Screenshots and GIFs**

    ![Screenshots and GIFs which demonstrate the steps or part of Neo4j Console the enhancement suggestion is related to](url)

    **Neo4j Console Version:** [Enter Neo4j Console version here]
    **OS and Version:** [Enter OS name and version here]

### Your First Code Contribution

Unsure where to begin contributing to Neo4j Console? You can start by looking through these `beginner` and `help-wanted` issues:

* [Beginner issues][beginner] - issues which should only require a few lines of code, and a test or two.
* [Help wanted issues][help-wanted] - issues which should be a bit more involved than `beginner` issues.

Both issue lists are sorted by total number of comments. While not perfect, number of comments is a reasonable proxy for impact a given change will have.

### Pull Requests

* Include screenshots and animated GIFs in your pull request whenever possible.
* Follow the [JavaScript](#javascript-styleguide) styleguide.
* Document new code based on the
  [Documentation Styleguide](#documentation-styleguide)
* End files without a newline.
* Place requires in the following order:
    * Built in Node Modules (such as `path`)
    * Local Modules (using relative paths)
* Place class properties in the following order:
    * Class methods and properties (methods starting with a `@`)
    * Instance methods and properties
* Avoid platform-dependent code:
    * Use `require('fs-plus').getHomeDirectory()` to get the home directory.
    * Use `path.join()` to concatenate filenames.
    * Use `os.tmpdir()` rather than `/tmp` when you need to reference the
      temporary directory.
* Using a plain `return` when returning explicitly at the end of a function.
    * Not `return null`, `return undefined`, `null`, or `undefined`

## Styleguides

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Limit the first line to 50 characters or less
* Reference issues and pull requests liberally
* Consider starting the commit message with an applicable emoji:
    * :art: `:art:` when improving the format/structure of the code
    * :racehorse: `:racehorse:` when improving performance
    * :non-potable_water: `:non-potable_water:` when plugging memory leaks
    * :memo: `:memo:` when writing docs
    * :penguin: `:penguin:` when fixing something on Linux
    * :apple: `:apple:` when fixing something on macOS
    * :checkered_flag: `:checkered_flag:` when fixing something on Windows
    * :bug: `:bug:` when fixing a bug
    * :fire: `:fire:` when removing code or files
    * :white_check_mark: `:white_check_mark:` when adding tests
    * :lock: `:lock:` when dealing with security
    * :arrow_up: `:arrow_up:` when upgrading dependencies
    * :arrow_down: `:arrow_down:` when downgrading dependencies

### JavaScript Styleguide

All JavaScript must adhere to [W3C Style Guide](http://www.w3schools.com/js/js_conventions.asp).

* Prefer the object spread operator (`{...anotherObj}`) to `Object.assign()`
* Inline `export`s with expressions whenever possible
  ```js
  // Use this:
  export default class ClassName {

  }

  // Instead of:
  class ClassName {

  }
  export default ClassName
  ```

### Documentation Styleguide

* Use [Markdown](https://daringfireball.net/projects/markdown).
* Reference methods and classes in markdown with the custom `{}` notation:
    * Reference classes with `{ClassName}`
    * Reference instance methods with `{ClassName::methodName}`
    * Reference class methods with `{ClassName.methodName}`

#### Example

```js
// Public: Get the addition of two numbers.
//
// * `firstNum` The first {Number} to add.
// * `secondNum` The second {Number} to add.
//
// Returns `result`.
function addTwoNumbers(firstNum, secondNum) {
    var result = firstNum + secondNum;
    return result;
}
```

## Additional Notes

### Issue and Pull Request Labels

This section lists the labels we use to help us track and manage issues and pull requests.

[GitHub search](https://help.github.com/articles/searching-issues/) makes it easy to use labels for finding groups of issues or pull requests you're interested in.

The labels are loosely grouped by their purpose, but it's not required that every issue have a label from every group or that an issue can't have more than one label from the same group.

Please open an issue on the repository if you have suggestions for new labels, and if you notice some labels are missing on some repositories, then please open an issue on the repository.

#### Type of Issue and Issue State

| Label name | Repository :mag_right: | Description |
| --- | --- | --- | --- |
| `enhancement` | [search][search-repo-label-enhancement] Feature requests. |
| `bug` | [search][search-repo-label-bug] Confirmed bugs or reports that are very likely to be bugs. |
| `question` | [search][search-repo-label-question] Questions more than bug reports or feature requests (e.g. how do I do X). |
| `feedback` | [search][search-repo-label-feedback] General feedback more than bug reports or feature requests. |
| `help-wanted` | [search][search-repo-label-help-wanted] The Neo4j Console core team would appreciate help from the community in resolving these issues. |
| `beginner` | [search][search-repo-label-beginner] Less complex issues which would be good first issues to work on for users who want to contribute to Neo4j Console. |
| `more-information-needed` | [search][search-repo-label-more-information-needed] More information needs to be collected about these problems or feature requests (e.g. steps to reproduce). |
| `blocked` | [search][search-repo-label-blocked] Issues blocked on other issues. |
| `duplicate` | [search][search-repo-label-duplicate] | Issues which are duplicates of other issues, i.e. they have been reported before. |
| `wontfix` | [search][search-repo-label-wontfix] | The Neo4j Console core team has decided not to fix these issues for now, either because they're working as intended or for some other reason. |
| `invalid` | [search][search-repo-label-invalid] | Issues which aren't valid (e.g. user errors). |

#### Pull Request Labels

| Label name | Repository :mag_right: | Description
| --- | --- | --- | --- |
| `work-in-progress` | [search][search-repo-label-work-in-progress] | Pull requests which are still being worked on, more changes will follow. |
| `needs-review` | [search][search-repo-label-needs-review] | Pull requests which need code review, and approval from maintainers or Neo4j Console core team. |
| `under-review` | [search][search-repo-label-under-review] | Pull requests being reviewed by maintainers or Neo4j Console core team. |
| `requires-changes` | [search][search-repo-label-requires-changes] | Pull requests which need to be updated based on review comments and then reviewed again. |
| `needs-testing` | [search][search-repo-label-needs-testing] | Pull requests which need manual testing. |

[search-repo-label-enhancement]: https://github.com/issues?utf8=✓&q=is%3Aopen+is%3Aissue+repo%3Aitaisteinherz%2Fneo4j-console+label%3Aenhancement
[search-repo-label-bug]: https://github.com/issues?utf8=✓&q=is%3Aopen+is%3Aissue+repo%3Aitaisteinherz%2Fneo4j-console+label%3Abug
[search-repo-label-question]: https://github.com/issues?utf8=✓&q=is%3Aopen+is%3Aissue+repo%3Aitaisteinherz%2Fneo4j-console+label%3Aquestion
[search-repo-label-feedback]: https://github.com/issues?utf8=✓&q=is%3Aopen+is%3Aissue+repo%3Aitaisteinherz%2Fneo4j-console+label%3Afeedback
[search-repo-label-help-wanted]: https://github.com/issues?utf8=✓&q=is%3Aopen+is%3Aissue+repo%3Aitaisteinherz%2Fneo4j-console+label%3Ahelp-wanted
[search-repo-label-beginner]: https://github.com/issues?utf8=✓&q=is%3Aopen+is%3Aissue+repo%3Aitaisteinherz%2Fneo4j-console+label%3Abeginner
[search-repo-label-more-information-needed]: https://github.com/issues?utf8=✓&q=is%3Aopen+is%3Aissue+repo%3Aitaisteinherz%2Fneo4j-console+label%3Amore-information-needed
[search-repo-label-blocked]: https://github.com/issues?utf8=✓&q=is%3Aopen+is%3Aissue+repo%3Aitaisteinherz%2Fneo4j-console+label%3Ablocked
[search-repo-label-duplicate]: https://github.com/issues?utf8=✓&q=is%3Aopen+is%3Aissue+repo%3Aitaisteinherz%2Fneo4j-console+label%3Aduplicate
[search-repo-label-wontfix]: https://github.com/issues?utf8=✓&q=is%3Aopen+is%3Aissue+repo%3Aitaisteinherz%2Fneo4j-console+label%3Awontfix
[search-repo-label-invalid]: https://github.com/issues?utf8=✓&q=is%3Aopen+is%3Aissue+repo%3Aitaisteinherz%2Fneo4j-console+label%3Ainvalid
[search-repo-label-work-in-progress]: https://github.com/pulls?utf8=✓&q=is%3Aopen+is%3Apr+repo%3Aitaisteinherz%2Fneo4j-console+label%3Awork-in-progress
[search-repo-label-needs-review]: https://github.com/pulls?utf8=✓&q=is%3Aopen+is%3Apr+repo%3Aitaisteinherz%2Fneo4j-console+label%3Aneeds-review
[search-repo-label-under-review]: https://github.com/pulls?utf8=✓&q=is%3Aopen+is%3Apr+repo%3Aitaisteinherz%2Fneo4j-console+label%3Aunder-review
[search-repo-label-requires-changes]: https://github.com/pulls?utf8=✓&q=is%3Aopen+is%3Apr+repo%3Aitaisteinherz%2Fneo4j-console+label%3Arequires-changes
[search-repo-label-needs-testing]: https://github.com/pulls?utf8=✓&q=is%3Aopen+is%3Apr+repo%3Aitaisteinherz%2Fneo4j-console+label%3Aneeds-testing
[beginner]: https://github.com/issues?utf8=✓&q=is%3Aopen+is%3Aissue+label%3Abeginner+label%3Ahelp-wanted+repo%3Aitaisteinherz%2Fneo4j-console+sort%3Acomments-desc
[help-wanted]: https://github.com/issues?utf8=✓&q=is%3Aopen+is%3Aissue+label%3Ahelp-wanted+repo%3Aitaisteinherz%2Fneo4j-console+sort%3Acomments-desc+