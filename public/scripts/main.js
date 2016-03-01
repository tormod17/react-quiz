

      var Question = React.createClass({
          render:function(){

            var index = this.props.step + 1;
                console.log(index);
            var quiz = this.props.quiz;
        
            var questionList= Object.keys(quiz).map(function(question){
                  return   <h1>{quiz[question].question}</h1>
            });


            return <div> {questionList} </div>
          }

      });




        var Quiz = React.createClass({

          getInitialState: function(){
            return {
              quiz: {},
              user_answers: [],
              step: 0
            }
          },

          componentDidMount: function(quizId){
            $.getJSON("./quiz.json", function(result) {

              this.setState({quiz: result});

            }.bind(this))


          },

          render:function(){

              return (
                <div>
                   <Question quiz={this.state.quiz} step={this.state.step} />
                </div>
              );
            }


        });

        ReactDOM.render(
          <Quiz />,
            document.getElementById('content')
        );



    ReactDOM.render(
      <Quiz />,
        document.getElementById('content')
    );
