# coding: utf-8

module Jiji::Composing::Configurators
  class DBConfigurator < AbstractConfigurator

    include Jiji::Db

    def configure(container)
      container.configure do
        object :index_builder, IndexBuilder.new
      end
    end

  end
end