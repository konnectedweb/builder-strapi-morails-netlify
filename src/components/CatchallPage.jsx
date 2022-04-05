class CatchallPage extends React.Component {
  state = { notFound: false };

  render() {
    return !this.state.notFound ? (
      <BuilderComponent
        apiKey="166036aec7f845c3a2523ae75b2d3166"
        model="my-page"
        contentLoaded={(content) => {
          if (!content) {
            this.setState({ notFound: true });
          }
        }}
      >
        <div className="loading">Loading...</div>
      </BuilderComponent>
    ) : (
      "Not Found"
    );
  }
}
