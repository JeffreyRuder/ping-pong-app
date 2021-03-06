describe('validInput', function() {
  it("is true if the input yields a valid integer when parsed", function() {
    expect(validInput('100')).to.equal(true);
    expect(validInput('37')).to.equal(true);
  });

  it("is false if the input yields a negative number when parsed", function() {
    expect(validInput(-33)).to.equal(false);
    expect(validInput('-100')).to.equal(false);
  });

  it("is false if the input yields NaN when parsed", function() {
    expect(validInput("Mom")).to.equal(false);
    expect(validInput("*$!")).to.equal(false);
  });
});

describe('pingPongOutput', function() {
  it("is the number for most input numbers", function() {
    expect(pingPongOutput(2)).to.equal(2);
    expect(pingPongOutput(28)).to.equal(28);
  });

  it("is 'ping' for numbers divisible by 3", function() {
    expect(pingPongOutput(6)).to.equal("ping");
    expect(pingPongOutput(27)).to.equal("ping");
  });

  it("is 'pong' for numbers divisible by 5", function() {
    expect(pingPongOutput(5)).to.equal("pong");
    expect(pingPongOutput(20)).to.equal("pong");
  });

  it("is 'pingpong' for numbers divisible by 3 and 5", function() {
    expect(pingPongOutput(15)).to.equal("pingpong");
    expect(pingPongOutput(45)).to.equal("pingpong");
  });
});
